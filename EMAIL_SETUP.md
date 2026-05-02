# Email Setup Guide for Contact Form

Your contact form is ready! You just need to set up Gmail app password to receive emails.

## Steps to Setup Gmail App Password:

### 1. Enable 2-Factor Authentication
- Go to your Google Account: https://myaccount.google.com/
- Click on "Security" in the left sidebar
- Under "How you sign in to Google", click "2-Step Verification"
- Follow the steps to enable 2FA if not already enabled

### 2. Generate App Password
- After enabling 2FA, go back to Security settings
- Under "How you sign in to Google", click "App passwords"
- Select "Mail" as the app and "Other" as the device
- Enter "Portfolio Contact Form" as the device name
- Click "Generate"
- Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### 3. Update Environment Variables
- Open your `.env.local` file
- Replace `your_gmail_app_password_here` with the generated app password
- Save the file

Example:
```
EMAIL_USER=muzammalzaheer571@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 4. Restart Your Development Server
- Stop your current dev server (Ctrl+C)
- Run `npm run dev` or `pnpm dev` again

## Testing the Contact Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (muzammalzaheer571@gmail.com) for the message
4. The form should show a success message and reset automatically

## Troubleshooting

If you get authentication errors:
- Make sure you're using the app password, not your regular Gmail password
- Ensure 2FA is enabled on your Google account
- Double-check that the app password is copied correctly (no extra spaces)

## What Happens When Someone Submits the Form:

✅ Form data is validated
✅ Email is sent to: muzammalzaheer571@gmail.com
✅ Success message is shown to the user
✅ Form is automatically reset
✅ User gets a nice confirmation with checkmark icon

The email will include:
- Sender's name
- Sender's email address
- Their message
- Timestamp and source (portfolio website)