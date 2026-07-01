import { Skeleton } from "@/shared/ui/skeleton";

export const PageSkeleton = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Skeleton
        width="100%"
        height="100%"
        borderRadius={0}
      />
    </div>
  );
};
