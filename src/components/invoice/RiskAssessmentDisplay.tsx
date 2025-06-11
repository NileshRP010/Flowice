// src/components/invoice/RiskAssessmentDisplay.tsx
"use client";
import type { AssessInvoiceRiskOutput } from "@/ai/flows/invoice-risk-assessment";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, TrendingUp, Percent, ShieldAlert } from "lucide-react";

interface RiskAssessmentDisplayProps {
  assessment: AssessInvoiceRiskOutput;
}

const RiskAssessmentDisplay: React.FC<RiskAssessmentDisplayProps> = ({ assessment }) => {
  const riskScorePercentage = Math.round(assessment.riskScore * 100);
  
  let riskLevelBadgeVariant: "default" | "secondary" | "destructive" | "outline" = "secondary";
  let RiskIcon = AlertTriangle; // Default for medium
  let progressClassName = "bg-primary"; // Default for medium (maps to primary color)
  let iconClassName = "text-primary";

  if (assessment.riskLevel === "Low") {
    riskLevelBadgeVariant = "default"; // default variant uses primary, let's make it accent
    RiskIcon = CheckCircle;
    progressClassName = "bg-accent";
    iconClassName = "text-accent";
  } else if (assessment.riskLevel === "High") {
    riskLevelBadgeVariant = "destructive";
    RiskIcon = ShieldAlert;
    progressClassName = "bg-destructive";
    iconClassName = "text-destructive";
  } else if (assessment.riskLevel === "Medium") {
    // Already set by defaults for AlertTriangle, bg-primary, text-primary
    // but explicitly stating for clarity
    riskLevelBadgeVariant = "secondary"; // Using secondary which can be styled distinctly (e.g. teal)
    RiskIcon = AlertTriangle;
    progressClassName = "bg-primary"; // Or use secondary if primary is too strong: "bg-secondary"
    iconClassName = "text-primary"; // Or "text-secondary"
  }


  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center font-headline text-2xl">
          <RiskIcon className={`mr-2 h-7 w-7 ${iconClassName}`} />
          Invoice Risk Assessment
        </CardTitle>
        <CardDescription>AI-powered analysis of the submitted invoice.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk Level</h3>
            <Badge 
              variant={riskLevelBadgeVariant} 
              className={`text-lg px-3 py-1 ${
                assessment.riskLevel === "Low" ? "bg-accent/10 text-accent-foreground border-accent/30" 
                : assessment.riskLevel === "Medium" ? "bg-primary/10 text-primary-foreground border-primary/30" 
                : "bg-destructive/10 text-destructive-foreground border-destructive/30"
              }`}
            >
              {assessment.riskLevel}
            </Badge>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk Score ({riskScorePercentage}%)</h3>
            <Progress value={riskScorePercentage} className="h-3 [&>div]:bg-inherit" indicatorClassName={progressClassName} />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center">
            <Percent className="mr-2 h-4 w-4" />
            Recommended Funding Rate (APR)
          </h3>
          <p className="text-2xl font-semibold text-primary">{assessment.recommendedFundingRate.toFixed(2)}%</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Key Risk Factors
          </h3>
          {assessment.riskFactors.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
              {assessment.riskFactors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No specific risk factors identified beyond general assessment.</p>
          )}
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Explanation</h3>
          <p className="text-sm text-foreground bg-muted/50 p-3 rounded-md">{assessment.explanation}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessmentDisplay;

