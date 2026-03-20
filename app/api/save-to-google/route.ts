import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwF37NQlxhxMtpxfFgIoBRoy-BTd2J6TFFZ3Xh_-qDH-UburxgQNNCNj4yH-E_vRuajAA/exec"

    if (!GOOGLE_SCRIPT_URL) {
      throw new Error('Google Script URL not configured')
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Google Sheets error:', error)
    return NextResponse.json(
      { error: 'Failed to save to Google Sheets', details: error.message },
      { status: 500 }
    )
  }
}
