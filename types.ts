
export enum TeacherType {
  CHINESE = 'CHINESE',
  INDONESIAN = 'INDONESIAN'
}

export interface RegistrationFormData {
  name: string;
  phone: string;
  teacherPreference: TeacherType;
  message?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ConsultationFormData {
  phone: string;
  classPreference: 'chinese' | 'indonesian' | 'unsure';
  reason: string;
  otherReason?: string;
  level?: '0' | 'beginner' | 'intermediate' | 'advanced' | 'unsure';
  wantsNotification?: 'yes' | 'no';
}
