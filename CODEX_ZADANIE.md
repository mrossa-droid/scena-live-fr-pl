# Zadanie do przekazania Codex

Pracujemy nad istniejącym projektem **SCENA LIVE — FR → PL**. Użytkownik działa z telefonu i potrzebuje, żebyś przejął techniczną stronę repozytorium i publikacji, bez zbędnych pytań.

W plikach załączonego ZIP znajduje się kompletna statyczna aplikacja (`index.html`).

**Cel:** przetestować, poprawić najważniejsze błędy i opublikować darmową, działającą stronę HTTPS na GitHub Pages, a jeżeli GitHub Pages nie jest dostępne — przygotować Netlify. Zachować istniejący wygląd i funkcje.

**Funkcje:** wystąpienie po francusku, rozpoznawanie `fr-FR` mikrofonem, tłumaczenie na polski, panel operatora i osobny, pełnoekranowy widok sceniczny (`?view=stage`), napisy z dużą typografią, synchronizacja okien, ręczny wpis, kontrola wielkości, eksport SRT, tryb DEMO.

**Ograniczenia:** bez płatnych kluczy/API, bez podawania nieprawdziwych gwarancji jakości lub braku opóźnień. Chrome Translator API może być niedostępne; MyMemory ma limity. Prawdziwy test mikrofonu trzeba wykonać na laptopie z docelowym wejściem audio.

**Kolejność pracy:**
1. Przejrzyj `AGENTS.md` i `index.html`, nie zaczynaj projektu od zera.
2. Uruchom test składni JS, przetestuj ręczny wpis, DEMO, ekran sceniczny, synchronizację i wyświetlanie.
3. Napraw znalezione błędy. Zachowaj statyczny hosting HTTPS.
4. Utwórz/uzupełnij repozytorium i włącz publikację GitHub Pages (workflow w `.github/workflows/pages.yml`); jeśli potrzeba uprawnień, poproś użytkownika tylko o niezbędne zatwierdzenie.
5. Podaj użytkownikowi gotowy adres https i krótką instrukcję użycia na laptopie + projektorze.

Jeżeli w Codex nie ma dostępu do ZIP, poproś o dołączenie `scena-live-fr-pl-codex.zip` z poprzedniej rozmowy ChatGPT. Nie udawaj, że widzisz pliki, jeżeli nie zostały dołączone.
