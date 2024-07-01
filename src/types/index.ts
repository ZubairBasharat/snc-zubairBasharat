export interface TabButton {
  id: number;
  label: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export interface ButtonsListProps {
  buttonsList: TabButton[];
  getClickedItem: (id: number) => void;
  selected: string | number;
  loading: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profileImage: string;
}
