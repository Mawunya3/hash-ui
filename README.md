README.md
# #UI — hash-ui

![npm version](https://img.shields.io/npm/v/@thetinycode/hash-ui)
![license](https://img.shields.io/npm/l/@thetinycode/hash-ui)
![react](https://img.shields.io/badge/react-18%2B-blue)
![tailwind](https://img.shields.io/badge/tailwind-v4-38BDF8)
![build](https://img.shields.io/badge/build-tsup-orange)

**hash-ui** is a lightweight collection of **React UI primitives built with Tailwind CSS**.

It provides composable components like layout primitives, forms, overlays, navigation, and marketing blocks to help developers build modern UIs faster while still retaining full control over Tailwind styling.

---

# Component Preview

Example using a few components:

```tsx
import {
  Section,
  Container,
  Stack,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Button,
  Grid
} from "@thetinycode/hash-ui"

export default function Demo() {
  return (
    <Section>
      <Container>
        <Stack gap="lg">

          <Badge variant="success">hash-ui works</Badge>

          <Card>
            <CardHeader>
              <CardTitle>Hello from #UI</CardTitle>
            </CardHeader>

            <CardContent>
              <Stack gap="md">
                <Input placeholder="Type something..." />
                <Button>Click me</Button>
              </Stack>
            </CardContent>
          </Card>

          <Grid cols={3}>
            <Card className="p-4">One</Card>
            <Card className="p-4">Two</Card>
            <Card className="p-4">Three</Card>
          </Grid>

        </Stack>
      </Container>
    </Section>
  )
}
Installation

Install using your preferred package manager.

pnpm
pnpm add @thetinycode/hash-ui
npm
npm install @thetinycode/hash-ui
yarn
yarn add @thetinycode/hash-ui
Installation Diagram
Your React App
      │
      │ install
      ▼
@thetinycode/hash-ui
      │
      │ imports components
      ▼
React Components
      │
      │ styled using
      ▼
Tailwind CSS
Tailwind Setup

hash-ui uses Tailwind CSS utilities internally.

Add the library as a source so Tailwind can detect its classes.

Example for Next.js / Vite global CSS

@import "tailwindcss";
@source "../node_modules/@thetinycode/hash-ui";
Import Styles

Import the stylesheet in your app root.

Example (Next.js App Router):

import "@thetinycode/hash-ui/styles.css"
import "./globals.css"
Basic Usage
import { Button, Card } from "@thetinycode/hash-ui"

export default function Example() {
  return (
    <Card className="p-4">
      <Button>Click me</Button>
    </Card>
  )
}
Component Categories
Layout Primitives

Box

Container

Stack

Grid

Section

Divider

Forms

Button

Input

Textarea

Select

Checkbox

Switch

Label

Display Components

Card

Badge

Avatar

Alert

Stat

EmptyState

Navigation

Header

Tabs

Breadcrumb

Pagination

Overlays

Modal

Drawer

Dropdown

Tooltip

Toast

Marketing

Hero

Project Structure
hash-ui
│
├─ src
│  ├─ components
│  │  ├─ primitives
│  │  ├─ forms
│  │  ├─ display
│  │  ├─ navigation
│  │  ├─ overlays
│  │  └─ marketing
│  │
│  ├─ lib
│  │   └─ cn.ts
│  │
│  ├─ index.ts
│  └─ styles.css
│
├─ dist
├─ package.json
└─ tsconfig.json
Development

Clone the repository:

git clone https://github.com/Mawunya3/hash-ui
cd hash-ui
pnpm install

Build the library:

pnpm build

Output files will be generated in:

dist/
Publishing

Preview the package:

npm pack

Publish to npm:

pnpm publish --access public
Roadmap

Planned improvements for future versions.

v0.1

Core primitives

Forms

Display components

Navigation

Overlays

v0.2

IconButton

ButtonGroup

InputGroup

AvatarGroup

Notification system

v0.3

Navbar

Sidebar

Accordion

Command palette

Theme support

v1.0

Fully documented component system

Demo site

Storybook

Accessibility improvements

animation utilities

License

MIT

Author

Created by Mawunya