"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlanType } from "./ComparePlans/ComparePlans";
import { toast } from "sonner";
import { useUpdatePlanMutation } from "@/redux/features/plansApi";

interface Props {
    plans: PlanType[];
}

export default function ComparePlansModal({ plans }: Props) {
    const [open, setOpen] = useState(false);
    const [localPlans, setLocalPlans] = useState<PlanType[]>(plans);
    const [updatePlan, { isLoading }] = useUpdatePlanMutation();

    const handleOpenChange = (nextOpen: boolean) => {
        if (nextOpen) {
            setLocalPlans(plans);
        }
        setOpen(nextOpen);
    };

    const handleChange = <K extends keyof PlanType>(
        index: number,
        field: K,
        value: PlanType[K]
    ) => {
        const updated = [...localPlans];
        updated[index] = { ...updated[index], [field]: value };
        setLocalPlans(updated);
    };

    const handleSave = async () => {

        try {
            for (const plan of localPlans) {
                await updatePlan({
                    id: plan.id,
                    per_video: plan.price,
                    unlimited_videos: plan.unlimitedVideos,
                    branding: plan.branding,
                    custom_thumbnail: plan.thumbnails,
                    seo_optimization: Number(plan.seo),
                }).unwrap();
            }

            toast.success("Plans updated successfully");
            setOpen(false);
        } catch {
            toast.error("Update failed");
        }
    };

    const booleanFields: (keyof PlanType)[] = [
        "unlimitedVideos",
        "branding",
        "thumbnails",
    ];

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>Edit Table</Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Edit Compare Plans</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 mt-4 max-h-[500px] overflow-y-auto">
                    {localPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className="border p-4 rounded-lg space-y-3"
                        >
                            <h3 className="font-semibold text-lg">{plan.name}</h3>

                            <input
                                type="number"
                                value={plan.price}
                                onChange={(e) =>
                                    handleChange(index, "price", Number(e.target.value))
                                }
                                className="border p-2 w-full rounded"
                            />

                            {booleanFields.map((field) => (
                                <label key={field} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={plan[field] as boolean}
                                        onChange={(e) =>
                                            handleChange(index, field, e.target.checked)
                                        }
                                    />
                                    {field}
                                </label>
                            ))}

                            <input
                                type="number"
                                value={plan.seo}
                                onChange={(e) =>
                                    handleChange(index, "seo", Number(e.target.value))
                                }
                                className="border p-2 w-full rounded"
                            />
                        </div>
                    ))}
                </div>

                <Button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="w-full mt-4"
                >
                    {isLoading ? "Saving..." : "Save Changes"}
                </Button>
            </DialogContent>
        </Dialog>
    );
}