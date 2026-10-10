## ADDED Requirements

### Requirement: Karaoke vocals
The runtime SHALL let a vocalist sing a song's timed lyrics into a microphone and SHALL score pitch against charted vocal notes when they exist.
#### Scenario: A song has a vocal chart
- **WHEN** a vocalist plays a song with pitched vocal notes
- **THEN** lyrics scroll in time and phrases are scored from detected microphone pitch
#### Scenario: A song has only lyrics
- **WHEN** a song has timed lyrics but no pitched notes
- **THEN** lyrics are shown for karaoke without pitch scoring
#### Scenario: A vocal stem is available
- **WHEN** a separated vocal stem exists and karaoke backing is chosen
- **THEN** the song plays without the original vocals
