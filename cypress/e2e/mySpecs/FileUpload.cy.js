import 'cypress-file-upload'
describe("File Upload Tests", () => {

    // npm install --save-dev cypress-file-upload
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile('test.pdf')
        cy.get("#file-submit").click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile({ filePath: 'test.pdf', fileName: 'myTest.pdf' })
        cy.get("#file-submit").click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it.only('File Upload - Drag & Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#drag-drop-upload").attachFile('test.pdf', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains('test.pdf')
    })

    it('Multiple Files Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get("#filesToUpload").attachFile(['test.pdf', 'test1.pdf'])
        cy.wait(3000)
        cy.xpath("//strong[normalize-space()='Files You Selected:']")
            .should('contain.text', 'Files You Selected:')
        cy.get("div[class='main'] li:nth-child(1)").should('contain.text', 'test.pdf')
        cy.get("div[class='main'] li:nth-child(2)").should('contain.text', 'test1.pdf')
    })

    it('File upload - Shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('test.pdf')
        cy.get('.smart-item-name', { includeShadowDom: true }).contains('test.pdf')
    })
})