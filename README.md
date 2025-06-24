# 🚀 React Modal Component

Composant React réutilisable de **fenêtre modale** avec support des **props dynamiques**, du **contenu personnalisé**, et un design prêt à styliser via `SCSS`.

[![npm version](https://badge.fury.io/js/react-modal-component.svg)](https://www.npmjs.com/package/react-modal-component)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## ✨ Fonctionnalités

- ✅ Utilisation ultra simple
- 💬 Support du contenu via `title`, `message` ou `children`
- 🎨 Personnalisable via SCSS (`main.scss`)
- 🔒 Accessibilité de base (overlay, focus trap possible)
- 🧩 Peut être utilisé dans tout projet React (Vite, CRA, Next...)

---

## 📦 Installation

```bash
npm install react-modal-component
```
## Ou en développement local :

```bash
npm link
```
## 🔧 Importation

```bash
import { Modal } from "react-modal-component";
import "react-modal-component/dist/styles/main.scss";
```

## 🧪 Exemple d'utilisation
1. Modale avec title et message

```bash
function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <Modal
          title="Succès"
          message="L'utilisateur a bien été créé."
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
```
## 
2. Modale avec contenu personnalisé (children)

```bash
<Modal title="Contact" onClose={handleClose}>
  <form>
    <label>Votre message :</label>
    <textarea />
    <button type="submit">Envoyer</button>
  </form>
</Modal>
```

## 📚 Props
| Prop      | Type       | Requis | Description |
|-----------|------------|--------|-------------|
| `title`   | `string`   | ❌     | Titre affiché en haut de la modale |
| `message` | `string`   | ❌     | Message simple sous le titre |
| `onClose` | `function` | ✅     | Fonction appelée au clic sur le bouton de fermeture |
| `children`| `ReactNode`| ❌     | Contenu personnalisé (si fourni, il remplace `message`) |

> ℹ️ Si `children` est défini, il prend le dessus sur `message`.

## 🎨 Styles
Vous pouvez adapter le fichier main.scss à vos couleurs et styles. N'oubliez pas de l'importer :
```bash
import 'react-modal-component/dist/styles/main.scss';
```
## 🔧 Développement local

Si vous développez ce composant en local dans un projet de test :

```bash
cd react-modal-component
npm link
npm run build

cd ../ton-projet-de-test
npm link react-modal-component
```
## 🛠️ Build du composant
```bash
npm run build
```
Cela compile le composant dans dist/ avec Rollup.

🧑‍💻 Auteur

Anthony Hayé — [GitHub](https://github.com/AnthonyHaye)









