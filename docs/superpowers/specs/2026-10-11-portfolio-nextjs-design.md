# John Orlie Mascardo portfolio migration

## Purpose and agreed scope
Update D:/portfolio for a fourth-year BSIT student at St. Dominic College of Asia preparing for future job applications, currently interested in QA. Migrate the existing static website to Next.js and deploy on Vercel after local verification. One scrolling page. Preserve the name and existing GitHub and LinkedIn destinations. No resume for now. No email address exists in the inspected source; do not invent one.

## Design
Use the current charcoal and dark blue palette (#14141e, #22252d) with blue accents, white headings, and muted readable body text. Draw inspiration from the supplied Dribbble reference through oversized typography, portrait prominence, spacing, and project presentation, while creating an original layout. Desktop hero places introduction and calls to action alongside an upper-body crop of the original D:/Downloads/me.JPG, retaining its original background and appearance. Mobile stacks content and keeps navigation usable without horizontal overflow. Use restrained CSS motion and respect reduced-motion settings.

## Page sections
1. Hero: John Orlie Mascardo, Aspiring QA Professional, fourth-year IT student. Links to featured project and contact.
2. About: hands-on manual testing, hardware work, AI-assisted development, and team communication. Do not claim formal test-case writing or automated-testing experience.
3. Featured project: LitterSense, a team capstone monitoring cat litter-box sessions, odor, live viewing, and AI-generated behavior insights. Explicitly identify in-development status and contributions rather than sole authorship. Describe testing with cats and planned expert evaluation without asserting completed expert review or diagnostic accuracy. Include the public website link, marked as requiring sign-in. Feature dashboard screenshot and hardware photo 4, with a compact supporting image gallery. Captions describe empty-data screenshots honestly.
4. Skills: manual feature testing, expected-result checks, bug reporting to teammates, retesting fixes; Monday/Wednesday/Friday progress updates. Retain existing technologies except Express and Postman; add Next.js, React, Vercel, Supabase and retain Firebase. Hardware: ESP32, ESP32-S3, MQ135, MQ136, HC-SR04, YRM100 RFID reader and UHF RFID tags. Tools include Arduino IDE and PlatformIO. Group as experience and tools, without invented proficiency scores.
5. Certificates: Getting Started with Cisco Packet Tracer (29 Jan 2026); Introduction to IoT and Digital Transformation (11 Feb 2026); HTML and CSS (4 Feb 2026, certificate states five-year validity); PowerPoint 2019 Associate (30 May 2024); Word 2019 Associate (13 Mar 2024). Verify issuer visually where not available in extracted text. Use local PDFs for view links.
6. Contact: existing GitHub and LinkedIn. Footer with name and back-to-top navigation.

## Implementation architecture
Next.js App Router with TypeScript, app/layout.tsx for metadata, app/page.tsx for the page, app/globals.css for styling, and a small content module for repeated skill/certificate/gallery data where useful. Mostly server-rendered content. Only add client components if interaction requires them. Local assets in public/images and public/certificates. Use next/image for raster assets with accurate dimensions, responsive sizes, hero prioritization and lazy loading below the fold. No database, auth, contact-form backend, or animation library. The portfolio lists Firebase and Supabase as experience; it does not need their services.

## Migration and recovery
Preserve the legacy website in Git and an explicitly named legacy folder before replacing its entry points. Do not delete user assets or unrelated files. Map old about.html, techstack.html and contact.html URLs to their new section anchors where supported, including index.html to the homepage. Keep all changes reviewable. Install supported Next.js/React versions verified from official documentation at implementation time. Keep dependency versions locked. Work in D:/portfolio using approval for writes outside the current writable workspace; do not change global Git trust settings.

## Validation and delivery
Run production build, TypeScript and lint checks. Check desktop and mobile rendering, keyboard navigation, visible focus, color contrast, reduced motion, section links, portrait cropping, images and certificate downloads. Verify redirect compatibility. Add meaningful interaction checks only if custom client behavior is introduced. Deliver a local preview before deployment. Use Vercel's normal supported deployment flow, confirm the resulting URL loads, and report any account/login blocker without claiming deployment succeeded.

## Review status
Design prepared for user review. Implementation plan and execution remain pending approval of this document. No product code has been changed.
