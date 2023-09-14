import { useSession } from "next-auth/react";
import Image from "next/image";
import { useMemo } from "react";
import { useImageOnLoad } from "usehooks-ts";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { cn } from "@/libs/utils";

export const Avatar = ({ className }: { className?: string }) => {
  const { data: sessionData } = useSession();

  const avatar = useMemo(() => {
    return (
      sessionData?.user?.image ??
      createAvatar(lorelei, {
        size: 128,
        // ... other options
      }).toDataUriSync()
    );
  }, [sessionData]);

  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <Image
      className={cn("w-12 rounded-full", className)}
      onLoad={handleImageOnLoad}
      alt={sessionData?.user?.name ?? ""}
      src={avatar}
      style={{ ...css.fullSize }}
      width={300}
      height={300}
      // fill={true}
    />
  );
};
