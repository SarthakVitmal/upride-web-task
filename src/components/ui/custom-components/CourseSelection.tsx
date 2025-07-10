"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Minus, Plus, ArrowRight, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseSelection() {
    // State for course selection
    const [selectedCourse, setSelectedCourse] = useState<"beginner" | "advanced" | "custom">("beginner")
    const [licenseAddon, setLicenseAddon] = useState(false)
    const [couponCode, setCouponCode] = useState("")
    const [appliedCoupon, setAppliedCoupon] = useState("")
    const [activeTab, setActiveTab] = useState("step2")
    const [showAllDays, setShowAllDays] = useState(false)

    // Collapsible states
    const [beginnerExpanded, setBeginnerExpanded] = useState(true)
    const [advancedExpanded, setAdvancedExpanded] = useState(false)
    const [customizeExpanded, setCustomizeExpanded] = useState(false)

    // Demo course data
    const courses = {
        beginner: {
            name: "Beginner Blast",
            sessions: 10,
            price: 8500,
            description: "Basics in 10 sessions.",
            days: [
                { day: 1, title: "Getting in Gear" },
                { day: 2, title: "Slow Speed" },
                { day: 3, title: "Shifting Gears" },
                { day: 4, title: "Turning" },
                { day: 5, title: "Braking" }
            ]
        },
        advanced: {
            name: "Advanced Ace",
            sessions: 5,
            price: 6000,
            days: [
                { day: 1, title: "Braking" },
                { day: 2, title: "Cornering" },
                { day: 3, title: "Highway Skills" },
                { day: 4, title: "Night Riding" }
            ]
        },
        custom: {
            name: "Custom Course",
            sessions: "Flexible",
            price: 5000,
            description: "Tailored sessions.",
            options: [
                "Choose sessions",
                "Select focus",
                "Personal coaching"
            ]
        }
    }

    const visibleDays =
        selectedCourse !== "custom" && "days" in courses[selectedCourse]
            ? (showAllDays
                ? courses[selectedCourse].days
                : courses[selectedCourse].days.slice(0, 3))
            : []

    // Pricing calculations
    const basePrice = courses[selectedCourse].price
    const licenseFee = licenseAddon ? 2500 : 0
    const subtotal = basePrice + licenseFee
    
    // Apply 10% discount if coupon is applied
    const discount = appliedCoupon === "LEARN10" ? subtotal * 0.1 : 0
    const gstRate = 0.18
    const gstAmount = Math.round((subtotal - discount) * gstRate)
    const total = (subtotal - discount) + gstAmount

    const handleCourseSelect = (course: typeof selectedCourse) => {
        setSelectedCourse(course)
        setShowAllDays(false)
        // Auto-expand the selected course section
        if (course === "beginner") {
            setBeginnerExpanded(true)
            setAdvancedExpanded(false)
            setCustomizeExpanded(false)
        } else if (course === "advanced") {
            setBeginnerExpanded(false)
            setAdvancedExpanded(true)
            setCustomizeExpanded(false)
        } else {
            setBeginnerExpanded(false)
            setAdvancedExpanded(false)
            setCustomizeExpanded(true)
        }
    }

    const handleApplyCoupon = () => {
        // Simple coupon validation
        if (couponCode.trim() === "LEARN10") {
            setAppliedCoupon(couponCode)
        } else {
            alert("Invalid coupon code. Try 'LEARN10' for 10% off")
        }
    }

    const handleTabChange = (tab: string) => {
        setActiveTab(tab)
    }

    const toggleShowAllDays = () => {
        setShowAllDays(!showAllDays)
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 font-[Montserrat]">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <div className="font-medium tracking-wider text-[18px]">
                    <span className="bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent font-[Anybody] font-bold">
                        SERVICES
                    </span>
                </div>
                <h1 className="text-3xl md:text-[24px] font-bold text-gray-900 font-[Anybody]">Start Your Two-Wheeler Training with Ease!</h1>
                <p className="text-black max-w-3xl mx-auto leading-relaxed text-[18px]">
                    Get on the road with confidence by choosing the perfect training options tailored to your needs. Follow these
                    simple steps to customize your learning journey and master two-wheeler riding effortlessly.
                </p>
            </div>

            {/* Step Navigation */}
            <div className="flex justify-center">
                <div className="w-full">
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="w-full flex flex-col sm:flex-row">
                            <TabsTrigger value="step1" className="w-full sm:w-auto flex-1 text-md">
                                Step 01- Pick Your Perfect Ride
                            </TabsTrigger>
                            <TabsTrigger value="step2" className="w-full sm:w-auto flex-1 text-md">
                                Step 02- Choose Course
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="step1">
                            <Card className="bg-[#F2EAEA] border-0 mt-5 md:mt-0">
                                <CardContent className="py-6 px-4 text-center">
                                    <h2 className="text-2xl font-bold text-gray-700 mb-4 font-[Anybody]">Select Your Training Vehicle</h2>
                                    <p className="text-gray-700 mb-6">This would be the vehicle selection interface in a real implementation.</p>
                                    <Button onClick={() => handleTabChange("step2")} className="bg-red-500 hover:bg-red-600 text-white cursor-pointer rounded-full px-6 py-5">
                                        Proceed to Course Selection <ArrowRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="step2" className="p-0">
                            {/* Main Course Selection Card */}
                            <Card className="bg-[#F2EAEA] border-0 mt-5 md:mt-0">
                                <CardContent className="py-2 px-4 space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-700 text-center mb-8 font-[Anybody]">Choose Your Perfect Course</h2>

                                    <div className="space-y-4">
                                        {/* Beginner Blast Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={beginnerExpanded} onOpenChange={setBeginnerExpanded}>
                                                <div className="flex items-center justify-between mb-6">
                                                    <div
                                                        className="flex items-center space-x-5 cursor-pointer"
                                                        onClick={() => handleCourseSelect("beginner")}
                                                    >
                                                        <div className={`w-6 md:w-6 h-6 rounded-full flex items-center justify-center 
                                                            ${selectedCourse === "beginner" ? "bg-red-500" : "border-2 border-red-300 bg-white"}`}>
                                                            {selectedCourse === "beginner" && <Check className="h-4 w-4 text-white" />}
                                                        </div>
                                                        <span className="font-medium text-gray-800 text-[18px] flex flex-col sm:flex-row">
                                                            {courses.beginner.name}
                                                            <span className="block sm:inline">
                                                                {/* On mobile, this will be on a new line */}
                                                                <span className="sm:ml-1">– <strong>{courses.beginner.sessions} Sessions to Mastery</strong></span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <CollapsibleTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            {beginnerExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </Button>
                                                    </CollapsibleTrigger>
                                                </div>

                                                <CollapsibleContent className="space-y-3">
                                                    <div className="space-y-2">
                                                        {visibleDays.map((day, index) => (
                                                            <Collapsible key={day.day}>
                                                                <div
                                                                    className="rounded-xl p-4 flex items-center justify-between"
                                                                    style={{
                                                                        background: index % 2 === 0
                                                                            ? "linear-gradient(90deg, #FF8D8D 0%, #FFEBEC 200%)"
                                                                            : "linear-gradient(90deg, #E73131 0%, #FFEBEC 200%)"
                                                                    }}
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <span className="bg-inherit border-2 border-white text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">DAY {day.day}</span>
                                                                        <div>
                                                                            <span className="text-sm md:text-lg text-white font-medium">
                                                                                {day.title}
                                                                            </span>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                    <CollapsibleTrigger asChild>
                                                                        <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-transparent">
                                                                            <ChevronDown className="h-4 w-4" />
                                                                        </Button>
                                                                    </CollapsibleTrigger>
                                                                </div>
                                                                <CollapsibleContent className="transition-all duration-500 px-4 py-2 bg-white bg-opacity-20 rounded-b-lg">
                                                                    <p className="text-black text-sm">Additional details about this session would appear here when expanded.</p>
                                                                </CollapsibleContent>
                                                            </Collapsible>
                                                        ))}
                                                    </div>

                                                    {courses.beginner.days.length > 3 && (
                                                        <Button 
                                                            variant="link" 
                                                            className="text-red-500 p-0 h-auto font-normal"
                                                            onClick={toggleShowAllDays}
                                                        >
                                                            {showAllDays ? "Show Less" : "View More"} <ArrowRight className="h-4 w-4 ml-1" />
                                                        </Button>
                                                    )}
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </div>
                                        <hr className="bg-gray-900 border-gray-300" />

                                        {/* Advanced Ace Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={advancedExpanded} onOpenChange={setAdvancedExpanded}>
                                                <div className="flex items-center justify-between">
                                                    <div
                                                        className="flex items-center space-x-5 cursor-pointer"
                                                        onClick={() => handleCourseSelect("advanced")}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                                                            ${selectedCourse === "advanced" ? "bg-red-500" : "border-2 border-red-300 bg-white"}`}>
                                                            {selectedCourse === "advanced" && <Check className="h-4 w-4 text-white" />}
                                                        </div>
                                                        <span className="font-medium text-gray-800 text-[18px] flex flex-col sm:flex-row">
                                                            {courses.advanced.name}
                                                            <span className="block sm:inline">
                                                                {/* On mobile, this will be on a new line */}
                                                                <span className="sm:ml-1">– <strong>{courses.advanced.sessions} Sessions to Perfection</strong></span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <CollapsibleTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            {advancedExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </Button>
                                                    </CollapsibleTrigger>
                                                </div>
                                                <CollapsibleContent className="space-y-3">
                                                    <div className="space-y-2 mt-3">
                                                        {visibleDays.map((day, index) => (
                                                            <Collapsible key={day.day}>
                                                                <div
                                                                    className="rounded-xl p-4 flex items-center justify-between"
                                                                    style={{
                                                                        background: index % 2 === 0
                                                                            ? "linear-gradient(90deg, #FF8D8D 0%, #FFEBEC 200%)"
                                                                            : "linear-gradient(90deg, #E73131 0%, #FFEBEC 200%)"
                                                                    }}
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <span className="bg-inherit border-2 border-white text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">DAY {day.day}</span>
                                                                        <div>
                                                                            <span className="text-sm md:text-lg text-white font-medium">
                                                                                {day.title}
                                                                            </span>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                    <CollapsibleTrigger asChild>
                                                                        <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-transparent">
                                                                            <ChevronDown className="h-4 w-4" />
                                                                        </Button>
                                                                    </CollapsibleTrigger>
                                                                </div>
                                                                <CollapsibleContent className="px-4 py-2 bg-white bg-opacity-20 rounded-b-lg">
                                                                    <p className="text-white text-sm">Additional details about this session would appear here when expanded.</p>
                                                                </CollapsibleContent>
                                                            </Collapsible>
                                                        ))}
                                                    </div>
                                                    {courses.advanced.days.length > 3 && (
                                                        <Button 
                                                            variant="link" 
                                                            className="text-red-500 p-0 h-auto font-normal"
                                                            onClick={toggleShowAllDays}
                                                        >
                                                            {showAllDays ? "Show Less" : "View More"} <ArrowRight className="h-4 w-4 ml-1" />
                                                        </Button>
                                                    )}
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </div>
                                        <hr className="bg-gray-900 border-gray-300" />

                                        {/* Customize Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={customizeExpanded} onOpenChange={setCustomizeExpanded}>
                                                <div className="flex items-center justify-between">
                                                    <div
                                                        className="flex items-center space-x-3 cursor-pointer"
                                                        onClick={() => handleCourseSelect("custom")}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                                                            ${selectedCourse === "custom" ? "bg-red-500" : "border-2 border-red-300 bg-white"}`}>
                                                            {selectedCourse === "custom" && <Check className="h-4 w-4 text-white" />}
                                                        </div>
                                                        <span className="font-medium text-gray-800 text-[18px]">{courses.custom.name}</span>
                                                    </div>
                                                    <CollapsibleTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            {customizeExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </Button>
                                                    </CollapsibleTrigger>
                                                </div>
                                                <CollapsibleContent className="space-y-3 ml-9">
                                                    <p className="text-gray-700">{courses.custom.description}</p>
                                                    <ul className="list-disc pl-5 space-y-2 mt-3">
                                                        {courses.custom.options.map((option, index) => (
                                                            <li key={index} className="text-gray-700">{option}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-4">
                                                        <Input placeholder="Enter your customization requests" className="mb-2 outline-none border-none focus:ring-0 bg-[#EECFCF] rounded-full px-5 py-6 text-black" />
                                                        <Button variant="outline" className="mt-3 rounded-full bg-red-500 text-white">Submit Request</Button>
                                                    </div>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </div>
                                    </div>

                                    {/* Add-Ons Section */}
                                    <div className="space-y-4 bg-[#F6DFDF] px-6 py-3 rounded-lg">
                                        <h3 className="font-bold text-gray-800 text-[20px]">Add-Ons</h3>
                                        <p className="text-gray-700 font-medium text-[18px]">Get Your 2W License — Drive with Confidence!</p>
                                        <div
                                            className="flex items-center space-x-3 cursor-pointer"
                                            onClick={() => setLicenseAddon(!licenseAddon)}
                                        >
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                                                ${licenseAddon ? "bg-red-500" : "border-2 border-red-300 bg-white"}`}>
                                                {licenseAddon && <Check className="h-4 w-4 text-white" />}
                                            </div>
                                            <span className="font-bold text-gray-800">₹2,500</span>
                                        </div>
                                    </div>

                                    {/* Available Offers */}
                                    <div className="bg-[#F6DFDF] px-6 py-3 rounded-lg">
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-gray-800 text-[20px]">Available Offers</h3>
                                            <p className="text-gray-700 text-[16px]">Flat 10% Off — Get 10% off on your course fee. Use code: <strong>LEARN10</strong></p>
                                        </div>

                                        {/* Apply Coupons */}
                                        <div className="space-y-3 pt-6">
                                            <h3 className="text-lg font-bold text-gray-800">Apply Coupons</h3>
                                            <div className="flex space-x-2 rounded-4xl bg-[#EECFCF] px-3 py-2 border border-gray-300">
                                                <Input
                                                    placeholder="Enter Coupon"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                    className="flex-1 bg-[#EECFCF] border-gray-300 outline-none border-none focus:ring-0 focus:border-gray-300 text-gray-800"
                                                />
                                                <Button
                                                    onClick={handleApplyCoupon}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-4xl cursor-pointer"
                                                >
                                                    Apply <ArrowRight className="h-4 w-4 ml-1" />
                                                </Button>
                                            </div>
                                            {appliedCoupon && (
                                                <p className="text-green-600 text-sm">Coupon applied successfully! 10% discount added.</p>
                                            )}
                                        </div>

                                        {/* Pricing */}
                                        <div className="space-y-3 pt-6 border-t border-gray-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-800">Program Price</span>
                                                <span className="font-bold text-gray-800">₹{basePrice.toLocaleString()}</span>
                                            </div>
                                            {licenseAddon && (
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium text-gray-800">License Add-on</span>
                                                    <span className="font-bold text-gray-800">₹2,500</span>
                                                </div>
                                            )}
                                            {appliedCoupon && (
                                                <div className="flex justify-between items-center text-green-600">
                                                    <span className="font-medium">Discount (10%)</span>
                                                    <span className="font-bold">-₹{discount.toLocaleString()}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">GST (18%)</span>
                                                <span className="text-gray-800">₹{gstAmount.toLocaleString()}</span>
                                            </div>
                                            <hr className="bg-gray-950 border-gray-300" />

                                            <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-3">
                                                <span className="text-gray-800">Total</span>
                                                <span className="text-gray-800">₹{total.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Navigation Buttons */}
                            <div className="flex pt-2">
                                <Button
                                    onClick={() => handleTabChange("step1")}
                                    className="text-red-500 bg-inherit hover:bg-white cursor-pointer"
                                >
                                    Back
                                </Button>
                                <Button
                                    className="bg-inherit text-gray-600 hover:bg-white cursor-pointer"
                                    onClick={() => alert(`Proceeding to checkout with ${courses[selectedCourse].name} course. Total: ₹${total}`)}
                                >
                                    Next
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}