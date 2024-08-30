# Create Flutter Repository

**Create Flutter Repository** is a Visual Studio Code extension that simplifies the creation of repository pattern files for Dart projects. This extension helps streamline your development process by automatically generating a repository interface and its implementation, following best practices in Dart development.

## Features

- **Context Menu Integration**: Right-click to create a new repository.
- **Command Palette Access**: Use the Command Palette to create repository files.
- **Automatic File Generation**:
  - Generates an abstract repository interface (e.g., `name_repository.dart`).
  - Creates a corresponding repository implementation class (e.g., `name_repository_impl.dart`).
- **Pre-configured Imports**: Automatically imports the repository interface into the implementation file.

## Installation

1. Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).
2. Alternatively, download the `.vsix` file from the [Releases](https://github.com/your-username/create-flutter-repository/releases) section and install it manually.

## Usage

### Via Explorer Context Menu

1. Right-click on a folder in the Explorer.
2. Select **Create Flutter Repository** from the context menu.
3. Enter the desired name for the repository.
4. The extension creates a new `repository` folder (if it doesn't already exist) and generates:
   - `name_repository.dart`
   - `name_repository_impl.dart`

### Via Command Palette

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Search for **Create Flutter Repository**.
3. Enter the desired name for the repository.
4. The extension generates the necessary files in a new or existing `repository` folder.

### Example

For a repository named `user`, the extension generates the following files:

- **`user_repository.dart`**:
```dart
  abstract class UserRepository {}
```
  
- **`user_repository_impl.dart:`**:
```dart
 import './user_repository.dart';

class UserRepositoryImpl implements UserRepository {}
```

## Requirements

- Visual Studio Code version 1.92.0 or higher.
- Dart and Flutter SDK installed.

## Extension Settings

This extension operates with default settings and does not require additional configuration.

## Known Issues

- Currently, the extension does not check for pre-existing files with the same name. This feature may be added in future versions.

## Release Notes

### 0.0.1

- Initial release of **Create Flutter Repository**.
- Basic functionality for generating repository and implementation files.

## Contribution

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This extension is licensed under the [MIT License](https://opensource.org/licenses/MIT).