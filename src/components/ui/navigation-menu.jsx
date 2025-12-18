import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

// Animaciones específicas para cada dirección
const navigationAnimations = {
  "enterFromLeft": {
    initial: { opacity: 0, x: 200, y: 0 }, // Viene desde la derecha
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200, y: 0 },
  },
  "enterFromRight": {
    initial: { opacity: 0, x: -200, y: 0 }, // Viene desde la izquierda
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -200, y: 0 },
  },
  "exitToLeft": {
    initial: { opacity: 1, x: 0, y: 0 },
    animate: { opacity: 0, x: -200, y: 0 },
  },
  "exitToRight": {
    initial: { opacity: 1, x: 0, y: 0 },
    animate: { opacity: 0, x: 200, y: 0 },
  }
};

const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  ),
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50",
);

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      {""}
      <motion.div
        animate={{ rotate: props["data-state"] === "open" ? 180 : 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3"
          aria-hidden="true"
        />
      </motion.div>
    </NavigationMenuPrimitive.Trigger>
  ),
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(
  ({ className, children, animationType = "enterFromLeft", ...props }, ref) => {
    // Determinar animación basada en prop o data-motion
    const getAnimation = () => {
      // Prioridad: 1. prop animationType, 2. data-motion attribute
      const animType = animationType || props["data-motion"]?.replace("from-", "enterFrom").replace("to-", "exitTo");

      return navigationAnimations[animType] || navigationAnimations["enterFromLeft"];
    };

    const animation = getAnimation();

    return (
      <NavigationMenuPrimitive.Content
        ref={ref}
        asChild
        forceMount
        {...props}
      >
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{
            duration: 0.25,
            ease: "easeOut"
          }}
          className={cn(
            "absolute top-0 w-full md:w-auto",
            className,
          )}
        >
          {children}
        </motion.div>
      </NavigationMenuPrimitive.Content>
    );
  },
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        ref={ref}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        />
      </NavigationMenuPrimitive.Viewport>
    </div>
  ),
);
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" />
    </NavigationMenuPrimitive.Indicator>
  ),
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationAnimations, // Exportamos las animaciones
};