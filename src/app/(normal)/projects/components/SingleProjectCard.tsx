"use client";
import { useGetSingleProject } from '@/hooks/project.hook'
import React from 'react'

const SingleProjectCard = ({projectId}: {projectId: string}) => {
    const {data} = useGetSingleProject(projectId);
    console.log(data);
  return (
    <div>SingleProjectCard</div>
  )
}

export default SingleProjectCard