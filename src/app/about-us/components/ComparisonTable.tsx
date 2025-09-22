import Section from "@/components/page-components/common/Section";
import SectionTitle from "@/components/page-components/common/SectionTitle";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Package,
  Receipt,
  RefreshCw,
  Headphones,
  Timer,
  AlertTriangle,
  DollarSign,
  Search,
  ShieldAlert,
} from "lucide-react";

const ep365Features = [
  {
    icon: Clock,
    text: "No delays, no tiers, just responsive support. 95% of issues are solved in under 2 hours.",
  },
  {
    icon: Package,
    text: "All core features included with EP365’s basic plan — no extra fees.",
  },
  {
    icon: Receipt,
    text: "Transparent pricing — choose a plan tailored to your business.",
  },
  {
    icon: RefreshCw,
    text: "Customer-driven updates — EP365 evolves with your needs.",
  },
  {
    icon: Headphones,
    text: "Premium support for all — no add-ons required.",
  },
];

const otherSolutions = [
  {
    icon: Timer,
    text: "Selective support prioritization leads to delays.",
  },
  {
    icon: AlertTriangle,
    text: "Basic tools cost extra — expect hidden fees.",
  },
  {
    icon: DollarSign,
    text: "All-inclusive pricing often hides unnecessary features.",
  },
  {
    icon: Search,
    text: "Investor priorities often override customer needs.",
  },
  {
    icon: ShieldAlert,
    text: "Support is paywalled behind top-tier plans.",
  },
];

const ComparisonTable = () => {
  return (
    <Section className="border-x border-divide pb-12">
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4 mb-12">
        <Badge variant="outline" className="text-xs text-primary border-none font-medium">Uniqueness</Badge>
        <SectionTitle title="What makes EP365 different? " />
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-1/2 border-b border-border px-6 py-4 text-left text-xl font-medium">
                EP365
              </th>
              <th className="w-1/2 border-b border-border px-6 py-4 text-left text-xl font-medium">
                Other solutions
              </th>
            </tr>
          </thead>
          <tbody>
            {ep365Features.map((feature, index) => {
              const EpIcon = feature.icon;
              const OtherIcon = otherSolutions[index].icon;
              return (
                <tr key={index} className="border-t border-border">
                  <td className="align-top p-6 border-r border-border">
                    <div className="flex justify-start items-center gap-3">
                      <EpIcon className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-muted-foreground">{feature.text}</p>
                    </div>
                  </td>

                  <td className="align-top p-6">
                    <div className="flex justify-start items-start gap-3">
                      <OtherIcon className="w-5 h-5 text-muted-foreground shrink-0" />
                      <p className="text-muted-foreground">{otherSolutions[index].text}</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </Section>
  );
};

export default ComparisonTable;
