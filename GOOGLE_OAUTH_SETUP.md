# Google OAuth Setup Guide for ResumeBuilder

This guide will help you set up Google OAuth authentication for your ResumeBuilder application.

## Prerequisites

- Google Cloud Console account
- ResumeBuilder application running locally or deployed

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Give your project a name (e.g., "ResumeBuilder OAuth")

## Step 2: Enable Google Identity Services API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Identity Services API"
3. Click on it and press "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. If prompted, configure the OAuth consent screen first:

   - Choose "External" user type
   - Fill in the required fields:
     - App name: "ResumeBuilder"
     - User support email: Your email
     - Developer contact information: Your email
   - Add scopes: `email`, `profile`, `openid`
   - Add test users (your email) if in development

4. Create the OAuth 2.0 Client ID:

   - Application type: "Web application"
   - Name: "ResumeBuilder Web Client"
   - Authorized origins:
     - `http://localhost:4200` (for development)
     - Your production domain (e.g., `https://yourapp.com`)
   - Authorized redirect URIs:
     - `http://localhost:4200` (for development)
     - Your production domain

5. Copy the generated Client ID

## Step 4: Configure Your Application

1. Open `src/environments/environment.ts`
2. Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Google Client ID:

```typescript
export const environment = {
  production: false,
  googleClientId: "your-actual-client-id.apps.googleusercontent.com",
};
```

3. Do the same for `src/environments/environment.prod.ts` for production

## Step 5: Test the Integration

1. Start your development server:

```bash
ng serve
```

2. Navigate to `http://localhost:4200/signin`
3. You should see Google Sign-In and Sign-Up buttons
4. Click on them to test the OAuth flow

## Features Implemented

### Sign In with Google

- Users can sign in using their Google account
- User information is stored in localStorage
- Automatic redirect to the resume builder after successful authentication

### Sign Up with Google

- New users can create accounts using Google OAuth
- Same authentication flow as sign-in
- User profile information is extracted from Google

### User Data Stored

When a user signs in with Google, the following information is stored:

- `id`: Google user ID
- `email`: User's email address
- `name`: User's full name
- `picture`: User's profile picture URL
- `provider`: Set to 'google' to identify OAuth users

## Security Features

- JWT token validation
- Automatic session management
- Secure token storage
- Sign-out functionality that clears all stored data

## Development vs Production

### Development

- Uses `http://localhost:4200` as authorized origin
- Debug mode enabled in console

### Production

- Uses your production domain
- Production environment variables
- Optimized for performance

## Troubleshooting

### Common Issues

1. **"Invalid Client ID" Error**

   - Verify your Client ID is correct in environment files
   - Check that the domain is added to authorized origins

2. **"Unauthorized" Error**

   - Add your current domain to authorized origins in Google Console
   - Ensure you're using HTTPS in production

3. **Button Not Rendering**

   - Check browser console for JavaScript errors
   - Verify Google Identity Services script is loaded
   - Ensure DOM elements are properly referenced

4. **Token Validation Fails**
   - Check network tab for API calls
   - Verify JWT decoding is working properly

### Debug Mode

To enable debug mode for Google OAuth:

1. Open browser developer tools
2. Check console for Google OAuth logs
3. Verify credential responses

## Production Deployment

Before deploying to production:

1. Update `environment.prod.ts` with production Client ID
2. Add production domain to Google Cloud Console authorized origins
3. Ensure HTTPS is enabled
4. Test the OAuth flow on the production environment

## Support

If you encounter issues:

1. Check Google Cloud Console logs
2. Verify all URLs and Client IDs
3. Ensure your OAuth consent screen is properly configured
4. Test with different browsers to rule out browser-specific issues

---

**Note**: Keep your Google Client ID secure and never commit it to public repositories. Consider using environment variables in production deployments.
