# Instrukcje dla Codex — SCENA LIVE FR → PL

Projekt: statyczna aplikacja webowa, bez bundlera, backendu, płatnych kluczy i zależności npm.
Punkt wejścia: `index.html`. Nie przepisuj aplikacji bez potrzeby: zachowaj istniejącą funkcjonalność.

## Cel
- Prelegent mówi po francusku (`fr-FR`), na osobnym ekranie scenicznym projektora pojawiają się polskie napisy w czasie zbliżonym do rzeczywistego.
- Panel operatora na laptopie: mikrofon, kontrola translacji i wyglądu, ręczne wstawianie napisów, test, eksport SRT.
- Ekran sceniczny: ten sam adres z parametrem `?view=stage`, pełny ekran, duża typografia, ciemne tło.
- Synchronizacja między oknami tej samej przeglądarki/origin przez `BroadcastChannel` i `localStorage`.

## Obecna implementacja
- Web Speech API (Chrome) do rozpoznawania mowy po francusku; API może wymagać usług Google i dostępu do sieci.
- Chrome Translator API jako opcjonalne lokalne tłumaczenie — jego dostępność zależy od przeglądarki, sprzętu i pakietu językowego.
- MyMemory jako zapasowa, limitowana usługa tłumaczenia. Nie gwarantuj bezpłatnej pracy bez limitów.
- Pełna aplikacja wymaga HTTPS dla dostępu do mikrofonu (localhost podczas developmentu także działa).

## Priorytety
1. Sprawdź składnię JS i działanie panelu/operatora/sceny w przeglądarce desktopowej.
2. Rozpoznawanie nie może dublować fragmentów; utrzymuj kolejność tłumaczonych segmentów.
3. Stabilność przy wyłączeniu i ponownym włączeniu mikrofonu, restartach rozpoznawania i utracie internetu.
4. Łatwe przełączenie na ręczne napisy, z czytelną informacją o błędach.
5. Projekt ma się dać bezpłatnie opublikować jako statyczna witryna na GitHub Pages lub Netlify.

## Bezpieczeństwo i jakość
- Nie używaj płatnych usług ani sekretów po stronie klienta.
- Nie zapisuj nagrań dźwięku; opisuj użytkownikowi transmisję do zewnętrznych API.
- Wyświetlaj tłumaczenia przez `textContent`, bez wstrzykiwania HTML.
- Nie deklaruj, że demo testujące gotowy tekst jest prawdziwym tłumaczeniem.
- Test end-to-end z prawdziwym francuskim mikrofonem wymaga ręcznej próby na docelowym sprzęcie.
