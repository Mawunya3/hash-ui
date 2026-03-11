import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare function Button({ className, variant, size, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
}
declare function ButtonGroup({ className, orientation, ...props }: ButtonGroupProps): react_jsx_runtime.JSX.Element;

declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
}
declare function IconButton({ className, variant, size, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare function Label({ className, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}
declare function Alert({ className, variant, ...props }: AlertProps): react_jsx_runtime.JSX.Element;
declare function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
}
declare function Avatar({ className, src, alt, fallback, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
declare function AvatarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "secondary" | "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function EmptyState({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function EmptyStateTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function EmptyStateDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function EmptyStateActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const noticeVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NoticeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof noticeVariants> {
}
declare function Notice({ className, variant, ...props }: NoticeProps): react_jsx_runtime.JSX.Element;
declare function NoticeTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function NoticeDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function NoticeActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function Skeleton({ className, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}
declare function Spinner({ className, size, ...props }: SpinnerProps): react_jsx_runtime.JSX.Element;

declare function Stat({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function StatLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function StatValue({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function StatChange({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;

declare function Box({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg" | "full";
};
declare function Container({ className, size, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
}
declare function Divider({ className, orientation, ...props }: DividerProps): react_jsx_runtime.JSX.Element;

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
type GapSize = "xs" | "sm" | "md" | "lg" | "xl";
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: GridCols;
    gap?: GapSize;
}
declare function Grid({ className, cols, gap, ...props }: GridProps): react_jsx_runtime.JSX.Element;

type SectionSpacing = "sm" | "md" | "lg" | "xl";
type SectionElement = "section" | "div" | "main" | "aside" | "article";
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: SectionSpacing;
    as?: SectionElement;
}
declare function Section({ className, spacing, as: Comp, ...props }: SectionProps): react_jsx_runtime.JSX.Element;
declare function SectionHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SectionTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function SectionDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
    direction?: "row" | "col";
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
};
declare function Stack({ className, direction, gap, ...props }: StackProps): react_jsx_runtime.JSX.Element;

declare function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}
declare function AccordionItem({ className, ...props }: AccordionItemProps): react_jsx_runtime.JSX.Element;
declare function AccordionTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): react_jsx_runtime.JSX.Element;
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}
declare function AccordionContent({ className, open, ...props }: AccordionContentProps): react_jsx_runtime.JSX.Element | null;

declare function Breadcrumb({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>): react_jsx_runtime.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>): react_jsx_runtime.JSX.Element;
declare function BreadcrumbSeparator({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;

interface CommandPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}
declare function CommandPalette({ className, open, ...props }: CommandPaletteProps): react_jsx_runtime.JSX.Element | null;
declare function CommandPaletteInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>): react_jsx_runtime.JSX.Element;
declare function CommandPaletteList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CommandPaletteGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CommandPaletteGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function CommandPaletteItem({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): react_jsx_runtime.JSX.Element;
declare function CommandPaletteEmpty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function Header({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function HeaderInner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function HeaderBrand({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function HeaderNav({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function HeaderActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function NavbarBrand({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function NavbarNav({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function NavbarActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function Pagination({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function PaginationList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>): react_jsx_runtime.JSX.Element;
declare function PaginationItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>): react_jsx_runtime.JSX.Element;
interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
}
declare function PaginationLink({ className, isActive, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;

declare function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function SidebarItem({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>): react_jsx_runtime.JSX.Element;

declare function Tabs({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}
declare function TabsTrigger({ className, active, ...props }: TabsTriggerProps): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    side?: "left" | "right";
}
declare function Drawer({ className, open, side, ...props }: DrawerProps): react_jsx_runtime.JSX.Element | null;

declare function Dropdown({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function DropdownMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function DropdownItem({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): react_jsx_runtime.JSX.Element;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
}
declare function Modal({ className, open, ...props }: ModalProps): react_jsx_runtime.JSX.Element | null;
declare function ModalHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function ModalTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function ModalDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function ModalContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const toastVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
}
declare function Toast({ className, variant, ...props }: ToastProps): react_jsx_runtime.JSX.Element;
declare function ToastTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function ToastDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function ToastViewport({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function Tooltip({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function Hero({ className, ...props }: React.HTMLAttributes<HTMLElement>): react_jsx_runtime.JSX.Element;
declare function HeroContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function HeroBadge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function HeroTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react_jsx_runtime.JSX.Element;
declare function HeroDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react_jsx_runtime.JSX.Element;
declare function HeroActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, AccordionTrigger, Alert, AlertDescription, type AlertProps, AlertTitle, Avatar, AvatarFallback, AvatarGroup, type AvatarProps, Badge, type BadgeProps, Box, Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CommandPalette, CommandPaletteEmpty, CommandPaletteGroup, CommandPaletteGroupLabel, CommandPaletteInput, CommandPaletteItem, CommandPaletteList, type CommandPaletteProps, Container, Divider, type DividerProps, Drawer, type DrawerProps, Dropdown, DropdownItem, DropdownMenu, EmptyState, EmptyStateActions, EmptyStateDescription, EmptyStateTitle, Grid, type GridProps, Header, HeaderActions, HeaderBrand, HeaderInner, HeaderNav, Hero, HeroActions, HeroBadge, HeroContent, HeroDescription, HeroTitle, IconButton, type IconButtonProps, Input, type InputProps, Label, type LabelProps, Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, type ModalProps, ModalTitle, Navbar, NavbarActions, NavbarBrand, NavbarNav, Notice, NoticeActions, NoticeDescription, type NoticeProps, NoticeTitle, Pagination, PaginationItem, PaginationLink, type PaginationLinkProps, PaginationList, Section, SectionDescription, SectionHeader, type SectionProps, SectionTitle, Select, type SelectProps, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarItem, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Stack, Stat, StatChange, StatLabel, StatValue, Switch, type SwitchProps, Tabs, TabsContent, TabsList, TabsTrigger, type TabsTriggerProps, Textarea, type TextareaProps, Toast, ToastDescription, type ToastProps, ToastTitle, ToastViewport, Tooltip, cn };
