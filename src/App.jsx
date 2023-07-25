import { PrimaryButton } from '@property-scout/core-ui';
import { InputField } from '@property-scout/core-ui/lib/Forms/InputField';
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

import '@property-scout/core-ui/lib/styles/tailwind.min.css'

const App = () => {
  const token = useMemo(() => {
    const scriptTag = document.querySelector('[data-property-scout-token]')
    if (!scriptTag) {
      return null
    }

    return scriptTag.dataset?.propertyScoutToken
  }, [])

  return token ? (
    <div>
      <h1>Hello world! {token}</h1>
      <InputField placeholder="Your name" />
      <PrimaryButton>Push me</PrimaryButton>
    </div>
  ) : 'No token'
}

ReactDOM.render(<App/>, document.getElementById('property-scout-contact-form'));