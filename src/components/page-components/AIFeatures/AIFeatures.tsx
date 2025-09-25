import React from "react";
import {
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { AlertTriangle, Bot, CheckCircle, Clock, Lightbulb, MessageCircleQuestion, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionTitle from "../common/SectionTitle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Section from "../common/Section";
import { Badge } from "@/components/ui/badge";
import SectionDesc from "../common/SectionDesc";

const AIFeatures = () => {
    return (
        <Section id="ai-features" className="border-divide border-x py-12">
            <div className="flex flex-col justify-center items-center gap-4 mb-12">
                <Badge variant="outline" className="text-xs text-primary border-none font-medium">AI-Powered Procurement Platform</Badge>
                <SectionTitle title="AI-powered Procurement Platform That Thinks Ahead" className="max-w-sm mx-auto text-center" />
                <SectionDesc description="Seamless procurement through AI Innovation" />
            </div>
            <BentoGrid className="auto-rows-auto grid-rows-none">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        header={item.header}
                        className="items-start h-full self-start"
                    />
                ))}
            </BentoGrid>
        </Section>
    );
};

export default AIFeatures;

const headers = {
    sourcing: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between mb-4">
                        <p className="font-medium">Sourcing Workflow</p>
                        <p className="text-primary font-medium">AI Active</p>
                    </div>
                    <ul className="mt-2 space-y-4">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-5 text-green-500" />
                                <span className="text-muted-foreground">Request Analyzed</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Bot className="text-primary size-5 " />
                                <span className="text-muted-foreground">AI Sourcing Strategy</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Clock className="text-yellow-500 size-5" />
                                <span className="text-muted-foreground">Award Pending</span>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="text-primary font-medium">AI Recommendation</p>
                        <p className="text-muted-foreground">3 qualified suppliers found</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="Autonomous Sourcing" className="text-base" />
                <SectionDesc description="AI automates sourcing workflows from request to award." className="mt-3" />
            </div>
        </>
    ),
    rfp: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between mb-4">
                        <p className="font-medium">RFP Generator</p>
                        <Badge className="rounded-full bg-primary/10 text-primary font-medium">AI Powered</Badge>
                    </div>
                    <ul className="mt-2 space-y-4">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-primary size-5" />
                                <span className="text-muted-foreground">Auto-generating questions...</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex flex-col gap-2 border-l-4 border-primary bg-primary/20 p-3 rounded-lg">
                                <p className="font-medium">AI Suggestion:</p>
                                <span className="text-muted-foreground">AI Sourcing Strategy</span>
                            </div>
                        </li>

                        <div className="flex gap-2">
                            <Button className="bg-black">Accept</Button>
                            <Button variant="outline">Edit</Button>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="AI RFP Generator" className="text-base" />
                <SectionDesc description="Instantly generate RFPs with AI-powered templates and suggestions." className="mt-3" />
            </div>
        </>
    ),
    intake: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <p className="font-medium  mb-4">Request Form</p>
                    <ul className="mt-2 space-y-4 ">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Category:</span>
                                <div className="h-2.5 bg-accent rounded-full mt-1 w-[80%]"></div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Budget:</span>
                                <div className="h-2.5 bg-accent rounded-full mt-1 w-[80%]"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="bg-primary/20 rounded-lg p-4 flex flex-col gap-1 mt-4 ">
                        <p className="flex items-center font-medium gap-2 text-primary">
                            <Bot />
                            AI Assistant
                        </p>
                        <p className="text-muted-foreground">I can help auto-fill this form based on similar requests. Shall I proceed?</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="AI-Powered Intake Assistant" className="text-base" />
                <SectionDesc description="Simplify requests with an intelligent assistant that captures details." className="mt-3" />
            </div>
        </>
    ),
    analytics: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium ">Spend Analytics</p>
                        <p className="text-primary font-medium ">Live</p>
                    </div>
                    <Image src="/images/hero/graph.png" width={100} height={100} alt="Graph" className="w-60 h-15 mt-4" />
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4 ">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Bot className="text-primary" />
                            AI Forecast
                        </p>
                        <p className="text-muted-foreground">+15% spend projected Q4</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="AI Predictive & Spend Analytics" className="text-base" />
                <SectionDesc description="Forecast spending trends and optimize budgets with predictive AI." className="mt-3" />
            </div>
        </>
    ),
    supplier: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <p className="font-medium  mb-4">Supplier Evaluation</p>
                    <ul className="mt-2 space-y-4 ">
                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Acme Corp</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-green-500 rounded-full mt-1 w-12"></div>
                                    <span className="text-green-500">95</span>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Beta LLC</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-yellow-400 rounded-full mt-1 w-8"></div>
                                    <span className="text-yellow-400">78</span>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Gamma Inc</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-destructive rounded-full mt-1 w-4"></div>
                                    <span className="text-destructive">62</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4 ">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Lightbulb className="text-primary" />
                            AI Assistant
                        </p>
                        <p className="text-muted-foreground">I can help auto-fill this form based on similar requests. Shall I proceed?</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="Supplier Analytics & Auto Scoring" className="text-base" />
                <SectionDesc description="Evaluate suppliers with AI-driven scoring and insights." className="mt-3" />
            </div>
        </>
    ),
    compliance: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium ">Risk Monitor</p>
                        <p className="text-green-500 font-medium ">Secure</p>
                    </div>
                    <ul className="mt-2 space-y-4 ">
                        <li className="flex flex-col bg-yellow-100 border border-yellow-500 rounded-lg py-2 px-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 justify-center items-center">
                                    <AlertTriangle className="text-yellow-500 size-5" />
                                    <span className="text-muted-foreground">Contract Expiry</span>
                                </div>
                                <p className="text-yellow-500">30 days</p>
                            </div>
                        </li>

                        <li className="flex flex-col bg-green-100 border border-green-500 rounded-lg py-2 px-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 justify-center items-center">
                                    <MessageCircleQuestion className="text-green-500 size-5" />
                                    <span className="text-muted-foreground">Compliance</span>
                                </div>
                                <p className="text-green-500">100%</p>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Bot className="text-primary" />
                            AI Alert
                        </p>
                        <p className="text-muted-foreground">Renewal process auto-initiated</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <SectionTitle title="Compliance & Risk Insights" className="text-base" />
                <SectionDesc description="Stay ahead with AI-powered compliance tracking and risk alerts." className="mt-3" />
            </div>
        </>
    ),
};

const items = [
    {
        header: headers.sourcing,
        icon: <IconClipboardCopy className="h-4 w-4 " />,
    },
    {
        header: headers.rfp,
        icon: <IconFileBroken className="h-4 w-4 " />,
    },
    {
        header: headers.intake,
        icon: <IconSignature className="h-4 w-4 " />,
    },
    {
        header: headers.analytics,
        icon: <IconTableColumn className="h-4 w-4 " />,
    },
    {
        header: headers.supplier,
        icon: <IconArrowWaveRightUp className="h-4 w-4 " />,
    },
    {
        header: headers.compliance,
        icon: <IconArrowWaveRightUp className="h-4 w-4 " />,
    },
];