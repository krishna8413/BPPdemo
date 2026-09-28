import {
  Headset,
  LayoutList,
  MessageCircle,
  MonitorCog,
  ShoppingCart,
  Calculator,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Plane,
  Cpu,
  Phone,
  Building2,
  Truck,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  headset: Headset,
  "layout-list": LayoutList,
  "message-circle": MessageCircle,
  "monitor-cog": MonitorCog,
  "shopping-cart": ShoppingCart,
  calculator: Calculator,
  "shopping-bag": ShoppingBag,
  landmark: Landmark,
  "heart-pulse": HeartPulse,
  plane: Plane,
  cpu: Cpu,
  phone: Phone,
  "building-2": Building2,
  truck: Truck,
} as const;

export type IconName = keyof typeof iconMap;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component {...props} />;
}
