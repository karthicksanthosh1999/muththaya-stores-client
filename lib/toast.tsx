"use client";

import toast from "react-hot-toast";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Loader2,
} from "lucide-react";

type ToastType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading";

const styles = {
  success: {
    icon: CheckCircle,
    border: "border-green-500",
    iconColor: "text-green-500",
  },

  error: {
    icon: XCircle,
    border: "border-red-500",
    iconColor: "text-red-500",
  },

  warning: {
    icon: AlertTriangle,
    border: "border-yellow-500",
    iconColor: "text-yellow-500",
  },

  info: {
    icon: Info,
    border: "border-blue-500",
    iconColor: "text-blue-500",
  },

  loading: {
    icon: Loader2,
    border: "border-gray-500",
    iconColor: "text-gray-500",
  },
};

export const customToast = (
  type: ToastType,
  message: string
) => {
  const config = styles[type];

  const Icon = config.icon;

  toast.custom((t) => (
    <div
      className={`
        flex items-center gap-3
        bg-white dark:bg-zinc-900
        shadow-lg rounded-xl
        px-4 py-3
        border-l-4
        ${config.border}
        min-w-[320px]
        animate-in slide-in-from-right
      `}
    >
      <Icon
        className={`
          w-5 h-5
          ${config.iconColor}
          ${type === "loading" ? "animate-spin" : ""}
        `}
      />

      <p className="text-sm font-medium text-zinc-800 dark:text-white">
        {message}
      </p>
    </div>
  ));
};