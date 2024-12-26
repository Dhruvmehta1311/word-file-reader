# Word File Reader

This is a simple web application that allows users to upload and read `.docx` files. The content of the Word file is converted to HTML and displayed in the browser using the [Mammoth.js](https://github.com/mwilliamson/mammoth) library.

## Features

- Upload a `.docx` file from your local device.
- Converts the `.docx` content to HTML.
- Displays the Word file's content in a scrollable area.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS (Tailwind CSS)**: For styling the page.
- **JavaScript**: For handling file reading and conversion logic.
- **Mammoth.js**: For converting `.docx` files to HTML.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Dhruvmehta1311/word-file-reader.git
   ```

2. Navigate to the project directory:

   ```bash
   cd word-file-reader
   ```

3. Open the `index.html` file in your web browser.

## Usage

1. Open the `index.html` file in a browser.
2. Click on the **Choose File** button to select a `.docx` file from your local machine.
3. The content of the Word file will be displayed in the scrollable output area.

## Code Explanation

### HTML

The HTML structure consists of:

- An input field (`<input id="inputFile" type="file" accept=".docx" />`) to upload a `.docx` file.
- A div (`<div id="output" class="h-96 border border-blue-400 m-10 overflow-auto"></div>`) to display the converted HTML content.

### JavaScript

The JavaScript code:

1. Listens for a change event on the file input element.
2. Uses `FileReader.readAsArrayBuffer()` to read the selected `.docx` file as binary data.
3. Converts the file using Mammoth.js's `convertToHtml()` method.
4. Displays the generated HTML content in the output div.

### External Libraries

- **Mammoth.js**: A JavaScript library used to convert `.docx` files to HTML.

## Example

### Input:

Upload a `.docx` file, for example, a Word document containing simple text and images.

### Output:

The content of the Word file is displayed as HTML in the browser. Text and simple formatting (such as headings and paragraphs) are preserved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
