import { mount } from '@cypress/react'
import { Home } from '../../../src/pages/Home';
import { AppProviders } from '../../../src/lib/context/app-provider';
import '@testing-library/cypress/add-commands'
import { ORDER_TYPE } from '../../../src/lib/store';

it('should allow a typical user flow', () => {
  mount(
    <AppProviders>
      <Home />
    </AppProviders>
  )

  cy.findByRole('textbox').type('soccer')

  cy.findByTestId('searchSubmit').click()

  cy.findByRole('combobox').select(ORDER_TYPE.trending)

  cy.findByRole('button', { name: /load more/i }).click()

});
