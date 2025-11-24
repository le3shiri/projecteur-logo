import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      fullName, 
      company, 
      phone, 
      address, 
      message, 
      product, 
      quantity,
      additionalProducts,
      logo,
      logoFileName,
      logoFileType
    } = body

    // Format additional products for email
    const additionalProductsText = additionalProducts && additionalProducts.length > 0 
      ? `\n\nProduits additionnels:\n${additionalProducts.map((p: string) => `- ${p}`).join('\n')}`
      : ''

    // Logo attachment info
    const logoText = logo ? `\n\n🎨 LOGO CLIENT\n--------------\nFichier: ${logoFileName}\nType: ${logoFileType}\n(Logo joint en pièce jointe)` : ''

    // Create email message
    const emailMessage = `
🎯 NOUVELLE COMMANDE PROJECTEUR LED
=====================================

👤 INFORMATIONS CLIENT
----------------------
Nom: ${fullName}
Société: ${company}
Téléphone: ${phone}
Adresse: ${address}

📦 DÉTAILS DE LA COMMANDE
-------------------------
Produit principal: ${product}
Quantité: ${quantity}${additionalProductsText}${logoText}

💬 MESSAGE DU CLIENT
--------------------
${message || 'Aucun message'}

📅 Date: ${new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })}
    `

    // Prepare email payload
    const emailPayload: any = {
      access_key: 'edef57c2-f657-42e7-b86b-0c53b3a35711',
      subject: `🎯 Nouvelle Commande - ${product} (${fullName})`,
      from_name: `${fullName} - ${company}`,
      email: 'Projecteurlogo1@gmail.com',
      message: emailMessage,
      to_email: 'Anasahaddad788@gmail.com',
    }

    // Add logo attachment if provided
    if (logo && logoFileName) {
      emailPayload.attachment = logo
      emailPayload.attachment_name = logoFileName
    }

    // Send email using Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to send email')
    }

    console.log('Email sent successfully via Web3Forms')
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Email error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}
