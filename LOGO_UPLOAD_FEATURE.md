# Logo Upload Feature

## Overview
The contact form now includes a logo upload section that allows customers to upload their logo files directly when placing an order. The logo is sent as an email attachment.

## Features

### ✅ File Upload
- **Supported formats**: JPG, JPEG, PNG, GIF, SVG, WEBP
- **Maximum size**: 5 MB
- **Validation**: Automatic file type and size validation
- **User feedback**: Toast notifications for invalid files

### ✅ Preview
- Real-time image preview after upload
- File information display (name, size, type)
- Progress indicator
- Remove/replace functionality

### ✅ Email Integration
- Logo is converted to base64 format
- Sent as attachment via Web3Forms API
- Included in email notification to Projecteurlogo1@gmail.com
- Email shows logo file information

## User Experience

### Upload Process
1. Customer fills out the order form
2. Clicks on the upload area or drags and drops their logo file
3. Preview appears with file details
4. Can remove and upload a different file if needed
5. Logo is sent with the order when form is submitted

### Visual Design
- Clean, modern upload interface
- Drag-and-drop support
- Image preview with thumbnail
- File size and type display
- Progress indicator
- Remove button for easy file replacement

## Technical Implementation

### Frontend (`components/contact-form.tsx`)
- File input with validation
- Base64 encoding for transmission
- State management for file and preview
- Error handling with toast notifications

### Backend (`app/api/send-email/route.ts`)
- Receives base64 encoded logo
- Adds attachment to Web3Forms payload
- Includes logo information in email body

## Error Handling

### File Type Validation
- Only image formats accepted
- User receives error toast for invalid types

### File Size Validation
- Maximum 5MB enforced
- User receives error toast if file is too large

### Upload Errors
- Network errors handled gracefully
- User notified if upload fails
- Can retry submission

## Benefits

✅ **For Customers**
- Easy logo submission
- No need for separate email
- Instant visual confirmation
- All information in one form

✅ **For Business**
- Receive logo with order details
- No back-and-forth emails
- Faster order processing
- Better customer experience

## Future Enhancements (Optional)

- [ ] Support for PDF files
- [ ] Multiple file uploads
- [ ] Image compression before upload
- [ ] Cloud storage integration
- [ ] Logo preview in order confirmation email
