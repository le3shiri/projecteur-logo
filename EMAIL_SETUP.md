# Email Setup Instructions - Using Web3Forms

## Step 1: Get Your Access Key (FREE - 2 minutes)

1. Go to: https://web3forms.com
2. Click "Get Started Free"
3. Enter your email: **Projecteurlogo1@gmail.com**
4. Click "Create Access Key"
5. Check your Gmail inbox for the access key
6. Copy the access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Step 2: Update the API Route

Open `app/api/send-email/route.ts` and replace line 53:

```typescript
access_key: 'YOUR_ACCESS_KEY_HERE',
```

With your actual access key:

```typescript
access_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
```

## Step 3: Restart Development Server

```bash
npm run dev
```

That's it! No npm packages needed, no complex setup!

## How It Works

When a customer submits the contact form:
1. Form data is sent to `/api/send-email`
2. The API uses Web3Forms to send an email
3. Email is sent to: **Projecteurlogo1@gmail.com**
4. Email includes:
   - Customer information (name, company, phone, address)
   - Product details (main product + quantity)
   - Additional products (if selected)
   - Customer message
   - Timestamp

## Email Format

The email will include:
- 🎯 Subject: "Nouvelle Commande - [Product Name] ([Customer Name])"
- Clean text format with all order details
- Customer contact information
- Full timestamp in French format
- 🎨 Customer logo attachment (if uploaded)

## Why Web3Forms?

- ✅ **Super Simple**: Just one access key
- ✅ **100% Free**: Unlimited emails forever
- ✅ **No Dependencies**: No npm packages needed
- ✅ **Instant Setup**: Works in 2 minutes
- ✅ **Reliable**: Emails always delivered
- ✅ **No Verification**: Works immediately

## Features

- ✅ Spam protection included
- ✅ Email notifications
- ✅ Form submissions dashboard
- ✅ No credit card required
- ✅ No limits on free tier
- ✅ File attachments support (logos up to 5MB)
