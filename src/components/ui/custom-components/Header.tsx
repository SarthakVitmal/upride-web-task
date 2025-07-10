"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Minus, Plus, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseSelection() {
    const [selectedCourse, setSelectedCourse] = useState("beginner")
    const [beginnerExpanded, setBeginnerExpanded] = useState(true)
    const [advancedExpanded, setAdvancedExpanded] = useState(false)
    const [customizeExpanded, setCustomizeExpanded] = useState(false)
    const [licenseAddon, setLicenseAddon] = useState(false)
    const [couponCode, setCouponCode] = useState("")

    const programPrice = 8500
    const gstRate = 0.18
    const gstAmount = Math.round(programPrice * gstRate)
    const subtotal = programPrice
    const total = 7600

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 font-[Montserrat] ">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <div className="font-medium tracking-wider text-[18px]">
                    <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-[Anybody] font-bold">
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
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="w-full flex flex-col sm:flex-row">
                            <TabsTrigger value="step1" className="w-full sm:w-auto flex-1 text-md">
                                Step 01- Pick Your Perfect Ride
                            </TabsTrigger>
                            <TabsTrigger value="step2" className="w-full sm:w-auto flex-1 text-md">
                                Step 02- Choose Course
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="step1">
                            {/* You can place content for Step 01 here if needed */}
                        </TabsContent>
                        <TabsContent value="step2" className="p-0">
                            {/* Main Course Selection Card */}
                            <Card className="bg-[#F2EAEA] border-0 mt-5 md:mt-0">
                                <CardContent className="py-2 px-4  space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-700 text-center mb-8 font-[Anybody] ">Choose Your Perfect Course</h2>

                                    <div className="space-y-4">
                                        {/* Beginner Blast Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={beginnerExpanded} onOpenChange={setBeginnerExpanded}>
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                                            {selectedCourse === "beginner" && (
                                                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M5.5 8.5L7.5 10.5L11 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            )}
                                                            {/* <div className="w-2 h-2 bg-white rounded-full"></div> */}
                                                        </div>
                                                        <span className="font-medium text-gray-800 text-[18px]">
                                                            Beginner Blast – <strong className="text-bold">10 Sessions to Mastery</strong>
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
                                                        <div
                                                            className="rounded-xl p-4 flex items-center justify-between"
                                                            style={{
                                                                background: "linear-gradient(90deg, #FF8D8D 0%, #FFEBEC 200%)"
                                                            }}
                                                        >
                                                            <div className="flex items-center space-x-3">
                                                                <span className="bg-inherit border-2 border-white text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">DAY 1</span>
                                                                <span className="text-sm md:text-lg text-white font-medium">
                                                                    Getting in Gear —<span className="block md:inline"> Mastering the Basics</span>
                                                                </span>
                                                            </div>
                                                            <ChevronDown className="h-4 w-4 text-white" />
                                                        </div>

                                                        <div
                                                            className="rounded-xl p-4 flex items-center justify-between"
                                                            style={{
                                                                background: "linear-gradient(90deg, #E73131 0%, #FFEBEC 200%)"
                                                            }}
                                                        >
                                                            <div className="flex items-center space-x-3">
                                                                <span className="bg-inherit border-2 border-white text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">DAY 2</span>
                                                                <span className="text-sm md:text-lg text-white font-medium">
                                                                    Getting in Gear —<span className="block md:inline"> Mastering the Basics</span>
                                                                </span>
                                                            </div>
                                                            <ChevronDown className="h-4 w-4 text-white" />
                                                        </div>

                                                        <div className="bg-[#FF8D8D] rounded-lg p-4 flex items-center justify-between">
                                                            <div className="flex items-center space-x-3">
                                                                <span className="bg-inherit border-2 border-white text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">DAY 1</span>
                                                                <span className="text-sm md:text-lg text-white font-medium">
                                                                    Getting in Gear —<span className="block md:inline"> Mastering the Basics</span>
                                                                </span>
                                                            </div>
                                                            <ChevronDown className="h-4 w-4 text-white" />
                                                        </div>
                                                    </div>

                                                    <Button variant="link" className="text-red-500 p-0 h-auto font-normal">
                                                        View More <ArrowRight className="h-4 w-4 ml-1" />
                                                    </Button>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </div>
                                        <hr className="bg-gray-900 border-gray-300" />

                                        {/* Advanced Ace Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={advancedExpanded} onOpenChange={setAdvancedExpanded}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-6 h-6 rounded-full border-2 border-red-300 bg-white"></div>
                                                        <span className="font-medium text-gray-800 text-[18px]">
                                                            Advanced Ace – <strong>05 Sessions to Perfection</strong>
                                                        </span>
                                                    </div>
                                                    <CollapsibleTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            {advancedExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </Button>
                                                    </CollapsibleTrigger>
                                                </div>
                                                {advancedExpanded && (
                                                    <CollapsibleContent className="space-y-3 ml-9">
                                                        {/* Add content for Advanced Ace Course here */}
                                                    </CollapsibleContent>
                                                )}
                                            </Collapsible>
                                        </div>
                                        <hr className="bg-gray-900 border-gray-300" />

                                        {/* Customize Course */}
                                        <div className="space-y-2">
                                            <Collapsible open={customizeExpanded} onOpenChange={setCustomizeExpanded}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-6 h-6 rounded-full border-2 border-red-300 bg-white"></div>
                                                        <span className="font-medium text-gray-800 text-[18px]">Customize Course</span>
                                                    </div>
                                                    <CollapsibleTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            {customizeExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                                        </Button>
                                                    </CollapsibleTrigger>
                                                </div>
                                                {customizeExpanded && (
                                                    <CollapsibleContent className="space-y-3 ml-9">
                                                        {/* Add content for Customize Course here */}
                                                    </CollapsibleContent>
                                                )}
                                            </Collapsible>
                                        </div>
                                    </div>

                                    {/* Add-Ons Section */}
                                    <div className="space-y-4 bg-[#F6DFDF] px-6 py-3 rounded-lg">
                                        <h3 className="font-bold text-gray-800 text-[20px]">Add-Ons</h3>
                                        <p className="text-gray-700 font-medium text-[18px]">Get Your 2W License — Drive with Confidence!</p>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 rounded-full border-2 border-red-300 bg-white"></div>
                                            <span className="font-bold text-gray-800">₹2,500</span>
                                        </div>
                                    </div>

                                    {/* Available Offers */}
                                    <div className="bg-[#F6DFDF] px-6 py-3 rounded-lg">
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold text-gray-800 text-[20px]">Available Offers</h3>
                                            <p className="text-gray-700 text-[16px]">Flat 10% Off — Get 10% off on your course fee. Learn more, save more! 🚀</p>
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
                                                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-4xl">
                                                    Apply <ArrowRight className="h-4 w-4 ml-1" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Pricing */}
                                        <div className="space-y-3 pt-6 border-t border-gray-200">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-800">Program Price</span>
                                                <span className="font-bold text-gray-800">₹{programPrice.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">GST (18%)</span>
                                                <span className="text-gray-800">₹{gstAmount.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600">Subtotal</span>
                                                <span className="text-gray-800">₹{subtotal.toLocaleString()}</span>
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
                            <div className="flex gap-5 pt-1">
                                <Button variant="link" className="text-red-500 p-0">
                                    Back
                                </Button>
                                <Button variant="link" className="text-gray-600 p-0">
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