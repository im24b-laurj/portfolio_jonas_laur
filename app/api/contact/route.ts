import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validierung
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Hier könnte später eine echte Integration mit einem Email-Service erfolgen
    // z.B. SendGrid, Nodemailer, Resend, etc.

    console.log('Kontaktformular eingereicht:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Nachricht erfolgreich empfangen' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Verarbeiten des Formulars:', error);
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
}

