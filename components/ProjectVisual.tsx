import Image from "next/image";

import type { PortfolioProject } from "../content/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  if (project.screenshot) {
    return (
      <figure className="project-screenshot">
        <Image
          src={`${basePath}${project.screenshot.src}`}
          alt={project.screenshot.alt}
          fill
          sizes="(max-width: 960px) calc(100vw - 80px), 52vw"
          style={{ objectPosition: project.screenshot.position ?? "center" }}
        />
      </figure>
    );
  }

  if (project.visual === "route") {
    return (
      <div className="route-visual" aria-hidden="true">
        <div className="visual-topline"><span>Tomorrow</span><b>6 visits</b></div>
        <div className="route-map">
          <span className="route-line" />
          <span className="map-dot dot-a">A</span>
          <span className="map-dot dot-b">B</span>
          <span className="map-dot dot-c">C</span>
          <span className="map-dot dot-d">D</span>
        </div>
        <div className="route-status"><i /> Schedule looks good <b>4:20 PM</b></div>
      </div>
    );
  }

  if (project.visual === "budget") {
    return (
      <div className="sprout-visual" aria-hidden="true">
        <div className="visual-topline"><span>July budget</span><b>On track</b></div>
        <div className="money-layout">
          <div className="money-ring"><strong>$842</strong><span>safe to spend</span></div>
          <div className="money-bars">
            <span><i style={{ width: "72%" }} /></span>
            <span><i style={{ width: "46%" }} /></span>
            <span><i style={{ width: "61%" }} /></span>
          </div>
        </div>
        <div className="capture-pill">{' + "coffee five dollars"'}</div>
      </div>
    );
  }

  return (
    <div className="generic-visual" aria-hidden="true">
      <div className="visual-topline"><span>Selected project</span><b>Built to ship</b></div>
      <div className="generic-project-name">{project.name}</div>
      <div className="generic-project-data">
        <span><small>Focus</small>{project.type}</span>
        <span><small>Stack</small>{project.stack}</span>
        <span><small>Proof</small>{project.proof.length} engineering highlights</span>
      </div>
    </div>
  );
}
