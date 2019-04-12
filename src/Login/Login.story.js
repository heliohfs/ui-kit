import React from 'react';
import { storiesOf } from '@storybook/react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { Login } from './Login';
import { Input } from '../Inputs/Input';

storiesOf(`Login`, module)
  .add('Login', () => (
    <div style={{ width: '400px', height: '500px' }}>
      <Login
        headerImages={[
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad36332-03b9-4804-aad7-acc8455a1109/d48akz6-bb4a60bd-8220-476e-9fee-c8f65085e898.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZDM2MzMyLTAzYjktNDgwNC1hYWQ3LWFjYzg0NTVhMTEwOVwvZDQ4YWt6Ni1iYjRhNjBiZC04MjIwLTQ3NmUtOWZlZS1jOGY2NTA4NWU4OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rejvDZj50hUOu5A2mcPaHLwjtTe4mUbbd32mOm9aPzQ',
          'data:image/png;base64,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',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad36332-03b9-4804-aad7-acc8455a1109/d48akz6-bb4a60bd-8220-476e-9fee-c8f65085e898.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZDM2MzMyLTAzYjktNDgwNC1hYWQ3LWFjYzg0NTVhMTEwOVwvZDQ4YWt6Ni1iYjRhNjBiZC04MjIwLTQ3NmUtOWZlZS1jOGY2NTA4NWU4OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rejvDZj50hUOu5A2mcPaHLwjtTe4mUbbd32mOm9aPzQ',
        ]}
        rememberBox
        forgotPassword={{
          label: 'Esqueceu a senha?',
          component: 'a',
          props: { href: 'http://www.google.com.br' },
        }}
        onClick={remember => /* console.log("Login:", remember) */ null}
        buttonLabel="Acessar ao Sistema"
      >
        <Input
          name="login_email"
          label="E-mail"
          style={{ width: '100%' }}
          startAdornment={<AccountCircle />}
        />
        <Input
          name="login_senha"
          label="Senha"
          style={{ width: '100%' }}
          type="password"
          startAdornment={<Lock />}
          endAdornmentMargin={false}
          endAdornment={
            <IconButton>
              <VisibilityOff />
            </IconButton>
          }
        />
      </Login>
    </div>
  ))
  .add('Recupera', () => (
    <div style={{ width: '400px', height: '500px' }}>
      <Login
        rememberBox
        headerImages={[
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad36332-03b9-4804-aad7-acc8455a1109/d48akz6-bb4a60bd-8220-476e-9fee-c8f65085e898.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZDM2MzMyLTAzYjktNDgwNC1hYWQ3LWFjYzg0NTVhMTEwOVwvZDQ4YWt6Ni1iYjRhNjBiZC04MjIwLTQ3NmUtOWZlZS1jOGY2NTA4NWU4OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rejvDZj50hUOu5A2mcPaHLwjtTe4mUbbd32mOm9aPzQ',
          'data:image/png;base64,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',
        ]}
        forgotPassword={{
          label: 'Esqueceu a senha?',
          component: 'a',
          props: { href: 'http://www.google.com.br' },
        }}
        headerText="Recuperação de Senha"
        subheaderText="Informe abaixo o seu e-mail cadastrado no sistema."
        buttonLabel="Enviar nova senha"
        onClick={() => /* console.log("Recupera!!!!") */ null}
      >
        <Input
          name="recupera"
          label="E-mail cadastrado"
          style={{ width: '100%' }}
          startAdornment={<AccountCircle />}
        />
      </Login>
    </div>
  ));