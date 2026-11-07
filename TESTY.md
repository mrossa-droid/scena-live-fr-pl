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

## Szybsze napisy i ekran telefonu

Dodano „Start + duże napisy”: mikrofon i scena w tej samej karcie, powrót do panelu bez zatrzymania mikrofonu oraz Stop/Wznów na scenie. Gdy Fullscreen API jest niedostępne (np. iPhone), działa widok zajmujący cały obszar strony z widocznymi przyciskami dotykowymi. Przeglądarka może zachować własne paski.

Napisy częściowe uruchamiają tłumaczenie przed wynikiem końcowym rozpoznawania (pierwszy fragment po około 450 ms, kolejne żądania częściowe najwyżej co około 1,6 s, plus czas usługi). Nowszy fragment zastępuje poprzedni, wynik końcowy poprawia napis, a identyczny tekst korzysta z pamięci odpowiedzi w bieżącej karcie. Do historii/SRT trafiają tylko wyniki końcowe. Automatyczny wybór silnika nie czeka na pobieranie niegotowego modelu Chrome. Tłumaczenia częściowe zwiększają zużycie limitu MyMemory.

Test live-captions.cjs: Chromium w rozmiarze telefonu z emulacją dotyku i wyłączonym Fullscreen API; aktywny mikrofon na scenie, częściowy napis przed wynikiem finalnym, brak podwójnego żądania dla identycznego finału, korekta spóźnionego napisu, powrót do panelu, stop/wznów oraz dopasowanie tekstu do ekranu. Rozpoznawanie i usługa w tym teście są symulowane. Fizyczny iPhone i prawdziwy mikrofon nadal wymagają próby użytkownika.
