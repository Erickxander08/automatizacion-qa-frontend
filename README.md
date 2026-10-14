# Sauce Demo — suite Playwright + Cucumber

Pruebas de extremo a extremo de [Sauce Demo](https://www.saucedemo.com/) para el flujo de compra: login, carrito y checkout. Los escenarios están en Gherkin y la interacción con el navegador usa el patrón Page Object Model.

## Requisitos

- Node.js 20 o superior
- npm

Cucumber puede avisar que Node 24 todavía no está en su matriz de versiones probadas. La suite corre en esa versión.

## Configuración

```bash
npm install
npx playwright install chromium
```

## Ejecución

```bash
npm test
```

El navegador corre en modo headless. Para verlo:

```bash
npm run test:headed
```

Al terminar, Cucumber escribe un reporte HTML en `reports/cucumber.html`.

### Variables de entorno

| Variable | Valor por defecto | Uso |
| --- | --- | --- |
| `BASE_URL` | `https://www.saucedemo.com` | URL de la aplicación |
| `HEADLESS` | `true` | `false` abre el navegador visible |

Ejemplo:

```bash
npx cross-env BASE_URL=https://www.saucedemo.com HEADLESS=false npm test
```

En PowerShell, si no quieres usar `cross-env`:

```powershell
$env:HEADLESS="false"; npm test
```

## Credenciales de prueba

Definidas en `src/support/test-data.ts` y usadas por los escenarios:

| Usuario | Contraseña | Resultado |
| --- | --- | --- |
| `standard_user` | `secret_sauce` | Entra al catálogo y puede comprar |
| `locked_out_user` | `secret_sauce` | Login rechazado: usuario bloqueado |
| `usuario_invalido` | `clave_incorrecta` | Login rechazado: credenciales inválidas |

## Estructura

```
features/           Escenarios Gherkin
src/pages/          Page Objects
src/steps/          Step definitions
src/support/        World, hooks y datos de prueba
cucumber.js         Configuración de Cucumber
docs/estrategia.md  Informe de la estrategia
```
