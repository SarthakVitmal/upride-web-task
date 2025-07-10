# UpRide - Two-Wheeler Training Course Selection

A modern, responsive web application for selecting and customizing two-wheeler training courses. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring an intuitive multi-step course selection interface.

## 🚀 Features

- **Multi-Step Course Selection**: Interactive step-by-step process for choosing training courses
- **Course Options**: 
  - Beginner Blast (10 sessions)
  - Advanced Ace (5 sessions)
  - Custom Course (flexible sessions)
- **Interactive UI Components**: 
  - Collapsible course details
  - Expandable day-wise curriculum
  - Real-time pricing calculator
- **Add-ons & Discounts**: 
  - License addon option
  - Coupon code system with validation
  - Automatic GST calculation
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Styling**: Beautiful gradient designs and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **State Management**: React useState hooks

## 📦 Dependencies

### Core Dependencies
- React 19.0.0
- Next.js 15.3.5
- TypeScript 5.x
- Tailwind CSS 4.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd upride-web-task
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   └── ui/
│       ├── custom-components/
│       │   └── Header.tsx   # Main course selection component
│       ├── button.tsx       # Button component
│       ├── card.tsx         # Card component
│       ├── collapsible.tsx  # Collapsible component
│       ├── input.tsx        # Input component
│       ├── tabs.tsx         # Tabs component
│       └── ... (other UI components)
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design Features

### Color Scheme
- Primary: Red gradient (#E42525 to #FFBFB2)
- Background: Light beige (#F2EAEA)
- Accent: Pink gradients (#F6DFDF, #EECFCF)

### Typography
- Primary Font: Montserrat
- Headers: Anybody font family
- Responsive text sizing

### Interactive Elements
- Collapsible course sections
- Radio button selection with custom styling
- Gradient day cards with hover effects
- Real-time price calculation
- Coupon validation system

## 💰 Pricing Structure

### Course Pricing
- **Beginner Blast**: ₹8,500 (10 sessions)
- **Advanced Ace**: ₹6,000 (5 sessions)
- **Custom Course**: ₹5,000 (flexible sessions)

### Add-ons
- **License Add-on**: ₹2,500

### Discounts
- **LEARN10**: 10% off on course fee
- **GST**: 18% applied after discounts

## 🔧 Customization

### Adding New Courses
1. Update the `courses` object in `Header.tsx`
2. Add course data structure with name, sessions, price, and days
3. Update the pricing calculation logic

### Styling Modifications
- Modify Tailwind classes in components
- Update gradient colors in the design system
- Customize component styles in individual UI components

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible layouts for different screen sizes
- Touch-friendly interfaces
- Optimized typography scaling

## 🧪 Testing

The application includes:
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture for testability

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The application is optimized for Vercel deployment:
```bash
npm run start
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ for UpRide - Making two-wheeler training accessible and enjoyable!**
