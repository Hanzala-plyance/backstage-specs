## ADDED Requirements

### Requirement: Consent-gated camera capture
The app SHALL offer an explicit opt-in capture flow with a live preview, a
player-initiated Capture action, and Retake/Use choices. The camera stream SHALL
be stopped immediately after capture, cancellation, or navigation away from the
flow. The app SHALL NOT capture frames without the player pressing Capture, and
SHALL NOT keep any live camera feed during gameplay.
#### Scenario: A player captures a rocker photo
- **WHEN** the player opens the rocker panel, grants camera access and presses Capture
- **THEN** the preview freezes on the frame and the camera is released before review
#### Scenario: Camera permission is denied
- **WHEN** the operating system or player denies camera access
- **THEN** a visible explanation is shown and gameplay plus the existing stage remain fully available

### Requirement: Honest person detection with manual fallback
The app SHALL provide manual photo framing (position and zoom) as the default,
always-available path. When an on-device detection model is present and finds a
person, it SHALL pre-fill framing that the player can adjust. When detection is
unavailable or finds no person, the app SHALL say so and remain in manual
framing. Detection status SHALL be displayed truthfully and SHALL NOT be
simulated. Detection model weights SHALL NOT be bundled with the application.
#### Scenario: No person is found
- **WHEN** detection runs and finds no person in the captured frame
- **THEN** the app states that nobody was detected and offers manual framing without implying otherwise
#### Scenario: Offline first run
- **WHEN** the feature is used with no network and no downloaded model
- **THEN** manual framing is offered and the rocker can be created without any download

### Requirement: Local-only photo storage
The processed rocker image and framing SHALL be stored only in the local
application data directory, limited to one rocker per installation, and SHALL
NOT be transmitted over the network, embedded in logs or diagnostics, or written
outside validated IPC paths. Delete SHALL remove the stored image. Camera
permission SHALL be granted only to the trusted application origin, and
microphone capture SHALL NOT be requested.
#### Scenario: A player deletes their rocker
- **WHEN** the player chooses Delete in the rocker panel
- **THEN** the stored image is removed and the stage renders without the performer on next play

### Requirement: Beat-synced performer rendering
When a rocker photo exists and the feature is enabled, gameplay SHALL render the
processed photo as a stylized performer behind the note highway, with an
instrument silhouette matching the selected part. Performer motion SHALL be
driven by the chart timeline (beat-synchronized), with distinct idle, solo, and
Star Power states consistent with the HUD language.
#### Scenario: Star Power is activated with a rocker present
- **WHEN** the player activates Star Power during a song
- **THEN** the performer visibly enters its Star Power state in step with the HUD and audio
#### Scenario: Instrument follows the selected track
- **WHEN** the player starts a song on Drums versus Guitar
- **THEN** the performer silhouette shows the matching instrument for the selected part

### Requirement: Safe degradation and performance
The performer layer SHALL be optional and independently disableable in Settings.
Failure of camera, detection, image processing, or sprite rendering SHALL NOT
affect gameplay timing, scoring, pause, or the base stage. The layer SHALL stay
within the existing frame budget on supported hardware.
#### Scenario: The rocker sprite fails to load
- **WHEN** the stored image is missing or corrupt at song start
- **THEN** the stage renders without the performer and the song plays normally
