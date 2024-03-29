describe('Open a Web Page', () => {
    it('should visit the homepage', () => {
      cy.visit('https://magento.softwaretestingboard.com'); // Replace with your desired URL
  
      cy.contains('Men', {
        timeout: 10000
      })
    });
  });
  