export interface Pension {
  id?: number,
  birthdate?: string,
  gender?: string,
  retired?: number,
  year?: number,
  money?: number,
  accumulatedValue?: number,
  monthlyContribution?: number,
  updated_at?: Date,
  created_at?: Date
}

export interface PensionCreate {
  birthdate?: Date
  retired?: number
  gender?: string
  year?: string
  money?: string
}