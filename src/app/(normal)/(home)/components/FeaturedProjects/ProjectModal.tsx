import { Modal } from 'antd'
import React from 'react'

interface TProjectModal{
    title: string,
    modalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

const ProjectModal = ({title, modalOpen, setIsModalOpen, children}: TProjectModal) => {
  return (
      <Modal
              classNames={{ body: "black" }}
              className="bg-transparent"
              title={title}
              width={{
                xs: "95%",
                sm: "95%",
                md: "95%",
                lg: "95%",
                xl: "95%",
                xxl: "95%",
              }}
              style={{ backgroundColor: "transparent", top: 20 }}
              open={modalOpen}
              onOk={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
            >
              {children}
            </Modal>
  )
}

export default ProjectModal