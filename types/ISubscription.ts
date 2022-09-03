export type ISubscription = {
    startDate: any
    lastEventDate: number
    id?: number
    userId: number
    stripeId: string
    stripeStatus: string | null
    stripePriceId: string | null
    quantity: number | null
    trialEndsAt: number | null
    endsAt: number | null
}