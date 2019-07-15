import axios from 'axios';

class ResourceRequirement {
  constructor(
    public skill: string,
    public start: number,
    public duration: number,
  ) {}
}

export class PlannedProject {
  constructor(
    public name: string,
    public owner: string,
    public requirements: ResourceRequirement[],
  ) {}
}

export async function getPlannedProjects() {
  return axios.get<{projects?: PlannedProject[], error?: string}>('/api/plannedProjects').then(res => {
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    return !res.data.projects ? [] : res.data.projects.map(p => {
      const rrs = !p.requirements ? [] : p.requirements.map(r => r as ResourceRequirement)
      return new PlannedProject(p.name, p.owner, rrs);
    });
  });
}