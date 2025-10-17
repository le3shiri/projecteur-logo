# Email Troubleshooting Guide

## Check These Steps:

### 1. Verify .env.local File

Make sure your `.env.local` file contains:
```
RESEND_API_KEY=re_WkPxu6Sr_L7JMFyjDZqn75WTMZFPpKPnf
```

### 2. Restart Development Server

After creating/editing `.env.local`, you MUST restart:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

### 3. Check Browser Console

When you submit the form:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit the form
4. Look for error messages

### 4. Check Terminal/Server Logs

Look at your terminal where `npm run dev` is running for error messages.

### 5. Verify Resend Account

1. Log in to https://resend.com
2. Go to "Emails" section
3. Check if emails are being sent (even if they fail)
4. Check for any error messages

## Common Issues:

### Issue: "Email not verified"

**Solution:** With Resend's free tier, you can only send TO verified emails.

**Fix:**
1. Go to https://resend.com/domains
2. Click "Add Email"
3. Add: Projecteurlogo1@gmail.com
4. Check that Gmail inbox for verification email
5. Click the verification link

### Issue: "API key invalid"

**Solution:**
1. Check `.env.local` has correct API key
2. No spaces before or after the key
3. Restart dev server

### Issue: "Module not found: resend"

**Solution:**
```bash
npm install resend
```

## Test the Email System:

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Click "Commander maintenant"
4. Check:
   - Browser console for logs
   - Terminal for server logs
   - Resend dashboard for email status

## Still Not Working?

**Alternative: Check if API is being called**

Open browser DevTools → Network tab → Submit form → Look for `/api/send-email` request

- If you see it: Check the response for error details
- If you don't see it: Form submission issue (not email issue)

## Need Help?

Share the error message from:
1. Browser console
2. Terminal/server logs
3. Resend dashboard
