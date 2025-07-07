// declaration.d.ts

declare module '*.png' {
  const value: number;
  export default value;
}

declare module 'react-native-vector-icons/Ionicons' {
  import { Icon } from 'react-native-vector-icons/Icon';
  export default Icon;
}
