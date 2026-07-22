import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const params = new URLSearchParams(body)
    const name = params.get('name')?.trim()
    const phone = params.get('phone')?.trim()
    const service = params.get('service')?.trim()

    if (!name || name.length < 2) {
      return NextResponse.json({ message: 'Введите имя' }, { status: 400 })
    }
    const phoneDigits = phone?.replace(/\D/g, '') ?? ''
    if (phoneDigits.length < 10) {
      return NextResponse.json({ message: 'Введите корректный номер' }, { status: 400 })
    }

    // In production, save to database here. For now, just log.
    console.log('[leads]', { name, phone, service, createdAt: new Date().toISOString() })

    return NextResponse.json({
      message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
    })
  } catch {
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 })
  }
}
