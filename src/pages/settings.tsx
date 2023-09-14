import { Avatar } from "@/components/Avatar";
import { Layout } from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Settings() {
  const { data: sessionData, status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex h-full items-center justify-center">
        <div className="container mx-auto max-w-screen-lg">
          <div>
            <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
              <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                <div className="flex items-start justify-center">
                  <Avatar className="w-48" />
                </div>
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Display Name</label>
                      <div className="form-control">
                        <div className="input-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Display Name"
                            className="input input-bordered input-md w-full"
                          />
                          <button className="btn btn-primary">Save</button>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="soda">Choose the theme</label>
                      <div className="mt-1 flex h-10 w-28 items-center rounded border border-gray-200 bg-gray-50">
                        <button
                          tabIndex={-1}
                          className="cursor-pointer border-r border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="w-full appearance-none bg-transparent px-2 text-center text-gray-800 outline-none"
                          value="0"
                        />
                        <button
                          tabIndex={-1}
                          className="cursor-pointer border-l border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-2 h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
