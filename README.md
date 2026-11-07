# SCENA LIVE — napisy i tłumaczenie na ekranie sceny

Statyczna aplikacja bez opłat licencyjnych za frontend. Wykorzystuje wbudowane rozpoznawanie mowy w Chrome i opcjonalne, limitowane usługi tłumaczenia. Nie należy używać bez testu technicznego przed wydarzeniem.

## Uruchomienie

### Lokalnie
Uruchom `python3 -m http.server 8080` w folderze projektu, otwórz `http://localhost:8080` w Chrome na komputerze.

### Online za darmo
Opcja A: przeciągnij ten folder (lub ZIP) na https://app.netlify.com/drop i otrzymaj adres HTTPS.
Opcja B: w repozytorium GitHub w Settings → Pages wybierz **GitHub Actions** jako źródło publikacji; workflow `.github/workflows/pages.yml` publikuje zawartość tego repo po zmianach na gałęzi `main`.

## Na konferencji
1. Otwórz HTTPS na laptopie w aktualnym Google Chrome. Wybierz „Z jakiego języka?” i „Na jaki język?”. Przycisk ⇄ zamienia kierunek; ustawienia są zapamiętywane.
2. Podepnij wejście audio z mikrofonu prelegenta do laptopa (wybierz właściwe wejście w ustawieniach systemu).
3. Kliknij `Otwórz ekran sceniczny`, przeciągnij okno na wyświetlacz projektora, uruchom pełny ekran.
4. Przetestuj tekst źródłowy lub ręczny wpis. Gotowe DEMO dotyczy wyłącznie francuskiego → polskiego. Na telefonie przycisk „Start + duże napisy” utrzymuje mikrofon i napisy w tej samej karcie.
5. Wybierz metodę tłumaczenia i rozpocznij mikrofon. Zrób test z żywą mową FR przed wejściem publiczności.

## Ważne ograniczenia
- Synchronizacja operator ↔ ekran sceniczny jest między oknami tej samej przeglądarki, pod tym samym adresem. Dwa odrębne komputery wymagają rozszerzenia o serwer synchronizacji.
- Chrome SpeechRecognition nie jest gwarantowany na każdym systemie i może korzystać z chmury Google.
- Chrome Translator API może nie być dostępne. MyMemory ma limity, nie jest gwarantowanym systemem konferencyjnym.
- Nieobecność lub opóźnienie napisów przy dłuższej wypowiedzi może wymagać interwencji operatora.

## Praca z Codex
Codex Cloud wymaga uprzednio przygotowanego środowiska z repozytorium. Otwórz projekt w Codex i użyj pliku `CODEX_ZADANIE.md` jako briefu. Na iPhonie można kontynuować zadania w już opublikowanym środowisku. Ten ZIP nie przenosi rozmowy automatycznie do Codex — to gotowy kod i instrukcje do importu.

## Narzędzia na dużym ekranie

**Języki ⇄** zmienia język mikrofonu i napisów bez wychodzenia ze sceny. **＋ Notatka** pozwala dodać pojęcie i wyjaśnienie: do 3 notatek po 400 znaków, z edycją i ukrywaniem. Tłumaczenie trwa podczas pisania. Notatki są przechowywane lokalnie i synchronizowane między oknami tej samej przeglądarki; nie trafiają do tłumacza ani do SRT. Na telefonie są pod napisami, a na dużym ekranie po prawej. Nowe słowa pojawiają się płynnie; ograniczenie ruchu wyłącza efekt.
