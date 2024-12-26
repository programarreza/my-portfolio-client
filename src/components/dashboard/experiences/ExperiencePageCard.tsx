"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";

const rows = [
  { name: "CONTENT", uid: "content" },
  { name: "CATEGORY", uid: "category" },
  { name: "DATE", uid: "date" },
  { name: "PUBLISH DATE", uid: "publish date" },
  { name: "ACTIONS", uid: "actions" },
];

interface IProps {
  experiences: any[];
}

export default function ExperiencePageCard({ experiences }: IProps) {
  //   const { mutate: deleteBlog } = useDeleteBlog();

  //   const handleDelete = (id: string) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#ff7527",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //       width: "350px",
  //       customClass: {
  //         popup: "bg-[#081B29] text-white ",
  //         title: "text-white",
  //       },
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         deleteBlog(id);
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your blog has been deleted.",
  //           icon: "success",
  //           width: "350px",
  //           customClass: {
  //             popup: " bg-[#081B29] text-white ",
  //             title: "text-white",
  //           },
  //         });
  //       }
  //     });
  //   };

  return (
    <Table
      aria-label="all blog from dashboard"
      className="bg-transparent text-white"
      removeWrapper={true}
    >
      <TableHeader className="">
        {rows.map((row) => (
          <TableColumn className="text-white bg-[#081B29]" key={row?.uid}>
            {row?.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody className="bg-[#081B29]">
        {experiences?.map((experience) => (
          <TableRow key={experience?._id} className="bg-[#081B29]">
            <TableCell>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    experience?.content?.length > 250
                      ? experience?.content?.slice(0, 250) + "..."
                      : experience?.content,
                }}
                className="prose prose-invert max-w-none text-white text-sm"
              />
            </TableCell>
            <TableCell>{experience?.category}</TableCell>
            <TableCell>{experience?.date}</TableCell>
            <TableCell>{experience?.createdAt}</TableCell>

            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Edit experience" className="">
                  U{" "}
                  {/* <button className="text-lg text-default-400  cursor-pointer active:opacity-50">
                    <UpdateBlog blog={blog} />
                  </button> */}
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
