# Weryfikacja SCENA LIVE

Zachowano istniejącą statyczną aplikację i wygląd. Poprawki:
- zdarzenia starej sesji mikrofonu nie nadpisują nowej sesji po szybkim stop/start;
- ignorowanie wyników po zatrzymaniu i ograniczenie kolejnych pustych restartów;
- anulowanie zaległych wyników po ręcznym wpisie, DEMO i wyczyszczeniu sceny;
- wspólna oś czasu eksportu SRT po ponownym uruchomieniu mikrofonu;
- usunięcie poziomego przewijania podglądu na telefonie;
- informacja po odmowie pełnego ekranu;
- publikowanie wyłącznie plików witryny przez GitHub Actions.

Testy Chromium/Playwright: składnia JS, panel operatora, DEMO, ręczny wpis i bezpieczne wyświetlanie HTML jako tekstu, kolejka tłumaczeń z kontrolowaną odpowiedzią usługi, fr-FR i deduplikacja symulowanych wyników rozpoznawania, szybki stop/start, błąd sieci i ponowne uruchomienie, anulowanie opóźnionych wyników, otwarcie sceny i synchronizacja ustawień, pełny ekran, trwałość sceny po odświeżeniu, eksport SRT, szerokość 390 px. Wynik: PASS.

Osobny test synchronizacji przez localStorage przy wyłączonym BroadcastChannel: PASS.

Prawdziwe zapytanie HTTPS do MyMemory: HTTP 200, „Bonjour à tous” → „Witajcie,”. Próba prawdziwego zapytania z Chromium w środowisku chmurowym zablokowana przez certyfikat pośredniczącego proxy (ERR_CERT_AUTHORITY_INVALID). Nie wyłączano weryfikacji TLS. Automatyczne testy aplikacji używają kontrolowanych odpowiedzi usługi.

Nie wykonano odsłuchu prawdziwego mikrofonu ani pobrania lokalnego modelu Chrome Translator. Te funkcje wymagają próby na docelowym laptopie z Chrome, dostępem do mikrofonu i sieci. DEMO korzysta z gotowego tekstu.

Aplikacja nie ma zależności npm. Skrypty w tests/ wymagają jedynie środowiska testowego z Playwright i Chromium. Domyślny serwer testowy: http://localhost:8081/; można ustawić SCENA_URL na inny adres.
