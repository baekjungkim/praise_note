import { useMemo } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useImageOnLoad } from "usehooks-ts";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 text-3xl font-bold">
        <Link className="btn btn-ghost text-xl normal-case" href="/">
          Praise Note
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-bottom dropdown-end">
          {sessionData?.user ? (
            <>
              <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
                <Image
                  className="w-12 rounded-full"
                  onLoad={handleImageOnLoad}
                  alt={sessionData?.user?.name ?? ""}
                  src={avatar}
                  style={{ ...css.fullSize }}
                  fill={true}
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box text-base-content z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li onClick={() => void signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          ) : (
            <button
              className="btn btn-ghost rounded-btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
