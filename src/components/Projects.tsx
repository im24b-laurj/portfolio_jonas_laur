'use client';

import React, { useState } from 'react';
import { projects } from '../data/content';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
      <section
          id="projekte"
          className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors scroll-mt-20"
          aria-labelledby="projects-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="projects-heading" className="text-4xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
              Projekte
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
                <article
                    key={project.id}
                    className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 flex items-center justify-center bg-[#5dd3b6] dark:bg-[#5dd3b6] overflow-hidden">
                    {project.previewImage ? (
                        <img
                            src={project.previewImage}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <div className="text-white opacity-80 text-5xl">📦</div>
                    )}
                    {/* Status: weicht nach links aus, wenn eine Auszeichnung angezeigt wird */}
                    <div className={`absolute top-4 ${project.award ? 'left-4' : 'right-4'}`}>
                  <span className={`px-3 py-1 rounded-full text-sm text-white ${
                      project.status === 'Abgeschlossen' ? 'bg-white/20' : 'bg-black/20'
                  }`}>
                    {project.status}
                  </span>
                    </div>

                    {/* Auszeichnung */}
                    {project.award && (
                        <div className="absolute top-1 right-2 z-10 w-20 h-20 pointer-events-none">
                          <img
                              src="/gold-badge-5392868-removebg-preview.png"
                              alt={`Auszeichnung: ${project.award}`}
                              className="w-full h-full object-contain drop-shadow-md"
                              loading="lazy"
                          />
                          <span className="absolute inset-x-0 top-[37%] -translate-y-1/2 px-3 text-center text-[9px] font-bold leading-tight text-[#6e5034]">
                            {project.award}
                          </span>
                        </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-[#1e1e1e] dark:text-white font-semibold">
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                          <span
                              key={tech}
                              className="px-3 py-1 bg-[#efe1b5] dark:bg-[#5dd3b6]/20 text-[#6e5034] dark:text-[#5dd3b6] rounded-full text-sm"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Links */}
                    {(project.liveUrl !== undefined || project.repos || project.repoUrl) && (
                        <div className="flex flex-wrap gap-3">
                          {project.liveUrl !== undefined && (
                              project.liveUrl ? (
                                  <a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-2 text-[#5dd3b6] font-medium"
                                      aria-label={`${project.title} live anschauen`}
                                  >
                                    Zum Projekt
                                    <span aria-hidden="true">↗</span>
                                  </a>
                              ) : (
                                  <span className="inline-flex items-center gap-2 font-medium text-primary">
                                    Zum Projekt
                                    <span aria-hidden="true">↗</span>
                                  </span>
                              )
                          )}
                          {project.repos?.map((repo) => (
                              <a
                                  key={repo.url}
                                  href={repo.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 text-[#5dd3b6] font-medium"
                                  aria-label={`${project.title} - ${repo.name} auf GitHub anschauen`}
                              >
                                {repo.name}
                                <span aria-hidden="true">↗</span>
                              </a>
                          ))}
                          {!project.repos && project.repoUrl && (
                              <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 text-[#5dd3b6] font-medium"
                                  aria-label={`${project.title} auf GitHub anschauen`}
                              >
                                Zum Projekt
                                <span aria-hidden="true">↗</span>
                              </a>
                          )}
                        </div>
                    )}
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}
