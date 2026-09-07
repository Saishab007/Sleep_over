# Will You Go On A Date With Me?

A little 2-page website:

1. **index.html** — asks the question. The "No" button runs away every time it's touched/clicked, so "Yes" is the only real option.
2. **date.html** — shown after "Yes" is clicked. Shows a celebratory clapping-sea-lion GIF and "See you then!" — no fields to fill in.

The moment someone lands on `date.html` (i.e. clicks "Yes"), a quiet background request emails a "Ms. Rachel said YES!" notification to **saishabjr@gmail.com** using a free service called **Formspree** (no server needed — this whole site is just static files). She never sees any of this happening.

You'll need to do two things before this works: (1) connect Formspree, and (2) host the files somewhere with a link (GitHub Pages, free). Step-by-step below — no coding experience needed, just copy/paste.

---

## Step 1 — Connect Formspree (so the emails actually send)

1. Go to **https://formspree.io** and click **Sign Up**. Create a free account (email/password or "Sign up with Google").
2. Once logged in, click **+ New Form**.
3. Give it any name (e.g. "Date Request"), and set the form's email to **saishabjr@gmail.com**. Click **Create Form**.
4. Formspree will send a confirmation email to saishabjr@gmail.com — open that inbox and click the confirmation link (Formspree won't deliver submissions until this is confirmed).
5. On the form's page, Formspree shows you an **endpoint URL** that looks like:
   `https://formspree.io/f/abcdwxyz`
   Copy that URL.
6. Open the file **script.js** in this folder (right-click → Open with → Notepad, or any text editor). Find this line near the bottom section:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   Replace `https://formspree.io/f/YOUR_FORM_ID` with the real URL you copied. Save the file.

That's it — visiting the "Yes" page will now email a notification to saishabjr@gmail.com. Formspree's free plan allows 50 submissions/month, which is plenty for this.

---

## Step 2 — Put it on GitHub and turn on GitHub Pages (this gives you the link)

You said you already have a GitHub account, so:

1. Go to **https://github.com** and log in.
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `date-me` (any name is fine). Leave it **Public** (GitHub Pages' free tier requires public repos). Don't check any of the "initialize with README" boxes. Click **Create repository**.
4. On the next page, GitHub shows setup commands — you can ignore those. Instead, just click **uploading an existing file** (a link on that page).
5. Drag and drop all the files from this `date-me-page` folder into the upload box:
   - index.html
   - date.html
   - style.css
   - script.js
   (Make sure you upload the one where you already edited FORM_ENDPOINT in Step 1.)
6. Scroll down and click **Commit changes**.
7. Now go to the repository's **Settings** tab → **Pages** (left sidebar).
8. Under "Build and deployment" → "Branch", choose **main** and folder **/(root)**, then click **Save**.
9. Wait about 1 minute, then refresh the page. GitHub will show a green box with your live link, something like:
   `https://yourusername.github.io/date-me/`

That link is what you send them — it will open **index.html**, the question page.

---

## Step 3 — Test it before sending

Open the link yourself and click "Yes". Check saishabjr@gmail.com for the notification email (also check Spam the first time). Once you confirm it works, email the link to your date.

---

## Notes

- If you ever want to change the wording, colors, or the dodge messages, all the text is in plain English inside `index.html`, `date.html`, and `script.js` — easy to find and edit even without coding knowledge.
- If you make changes later, re-upload the edited file(s) on GitHub the same way (repository → **Add file** → **Upload files**), and GitHub Pages updates automatically within a minute or two.
- Everything here runs entirely in the browser — there's no password, payment, or private data involved beyond what they type into the form.
